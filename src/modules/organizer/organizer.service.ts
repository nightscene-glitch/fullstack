import { Injectable } from '@nestjs/common';

@Injectable()
export class OrganizerService {
  async getAll() {
    return {
      message: 'Organizer service is working',
      data: [],
      timestamp: new Date().toISOString()
    };
  }
}
