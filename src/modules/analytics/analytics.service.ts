import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  async getAll() {
    return {
      message: 'Analytics service is working',
      data: [],
      timestamp: new Date().toISOString()
    };
  }
}
