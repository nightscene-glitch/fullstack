import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async getAll() {
    return {
      message: 'Users service is working',
      data: [],
      timestamp: new Date().toISOString()
    };
  }
}
