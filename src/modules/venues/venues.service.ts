import { Injectable } from '@nestjs/common';

@Injectable()
export class VenuesService {
  async getAll() {
    return {
      message: 'Venues service is working',
      data: [],
      timestamp: new Date().toISOString()
    };
  }
}
