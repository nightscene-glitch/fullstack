import { Injectable } from '@nestjs/common';

@Injectable()
export class RecommendationsService {
  async getAll() {
    return {
      message: 'Recommendations service is working',
      data: [],
      timestamp: new Date().toISOString()
    };
  }
}
