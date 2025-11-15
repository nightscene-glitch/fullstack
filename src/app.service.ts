import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppInfo(): any {
    return {
      name: 'NightScene API',
      version: '1.0.0',
      description: 'Event Discovery & Ticketing Platform',
      environment: process.env.NODE_ENV || 'development',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      features: [
        'Personalized Event Discovery',
        'Instant Ticket Booking',
        'Pay-at-Counter Reservations',
        'Social Planning Features',
        'AI-Powered Recommendations',
        'Real-time Analytics',
        'Secure QR Validation',
        'Multi-Payment Gateway Support'
      ],
      endpoints: {
        documentation: '/api/docs',
        health: '/health',
        ready: '/ready',
        api: '/api/v1'
      }
    };
  }

  getHealthStatus(): any {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      version: '1.0.0',
      memory: {
        used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
        total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
        external: Math.round(process.memoryUsage().external / 1024 / 1024),
      },
      cpu: {
        usage: process.cpuUsage(),
      }
    };
  }

  getReadinessStatus(): any {
    // In a real application, you would check database connectivity,
    // Redis connectivity, external service availability, etc.
    return {
      status: 'ready',
      timestamp: new Date().toISOString(),
      checks: {
        database: 'connected',
        redis: 'connected',
        elasticsearch: 'connected',
        paymentGateway: 'available',
      }
    };
  }
}