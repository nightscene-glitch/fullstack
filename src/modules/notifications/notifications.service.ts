import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  async getAll() {
    return {
      message: 'Notifications service is working',
      data: [],
      timestamp: new Date().toISOString()
    };
  }
}
