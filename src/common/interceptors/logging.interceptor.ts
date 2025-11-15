import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Request, Response } from 'express';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    const response = context.switchToHttp().getResponse<Response>();
    const { method, url } = request;
    
    const startTime = Date.now();
    const requestId = Math.random().toString(36).substring(2, 15);
    
    // Add request ID to response headers
    response.setHeader('X-Request-ID', requestId);
    
    // Log request
    this.logger.log(`${requestId} ${method} ${url} - START`);

    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - startTime;
        this.logger.log(`${requestId} ${method} ${url} - ${response.statusCode} - ${duration}ms`);
      }),
      catchError((error) => {
        const duration = Date.now() - startTime;
        this.logger.error(`${requestId} ${method} ${url} - ERROR - ${duration}ms - ${error.message}`);
        throw error;
      }),
    );
  }
}