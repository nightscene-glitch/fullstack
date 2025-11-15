import { Injectable } from '@nestjs/common';

@Injectable()
export class SocialService {
  async getAll() {
    return {
      message: 'Social service is working',
      data: [],
      timestamp: new Date().toISOString()
    };
  }
}
