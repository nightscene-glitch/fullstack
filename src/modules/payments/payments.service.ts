import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  async getAll() {
    return {
      message: 'Payments service is working',
      data: [],
      timestamp: new Date().toISOString()
    };
  }
}
