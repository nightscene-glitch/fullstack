import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from '../../entities/ticket.entity';
import { Event } from '../../entities/event.entity';
import { User } from '../../entities/user.entity';
import { ConfigService } from '../../config/config.service';
import * as QRCode from 'qrcode';
import * as crypto from 'crypto';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private configService: ConfigService,
  ) {}

  async bookTicket(
    userId: string,
    eventId: string,
    tierName: string,
    quantity: number = 1,
    paymentMethod: 'online' | 'pay_at_counter' = 'online',
    attendeeInfo?: any
  ): Promise<Ticket[]> {
    const event = await this.eventRepository.findOne({
      where: { id: eventId },
      relations: ['venue', 'organizer']
    });

    if (!event) {
      throw new NotFoundException('Event not found');
    }

    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Find ticket tier
    const tier = event.ticketTiers.find(t => t.name === tierName);
    if (!tier) {
      throw new BadRequestException('Ticket tier not found');
    }

    // Check availability
    if (tier.sold + quantity > tier.capacity) {
      throw new BadRequestException('Not enough tickets available');
    }

    const tickets: Ticket[] = [];
    const fees = this.calculateFees(tier.price);
    const totalAmount = tier.price + fees;

    for (let i = 0; i < quantity; i++) {
      const ticketNumber = this.generateTicketNumber();
      
      const ticket = this.ticketRepository.create({
        ticketNumber,
        tierName,
        price: tier.price,
        fees,
        totalAmount,
        status: paymentMethod === 'pay_at_counter' ? 'pending' : 'confirmed',
        paymentMethod,
        user,
        event,
        attendeeInfo: attendeeInfo || { name: user.name, phone: user.phone },
        expiresAt: paymentMethod === 'pay_at_counter' 
          ? new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
          : null
      });

      // Generate QR code
      const qrData = await this.generateQRData(ticket);
      ticket.qrData = qrData;
      ticket.qrCode = await this.generateQRCode(qrData);

      tickets.push(await this.ticketRepository.save(ticket));
    }

    // Update event sold count
    tier.sold += quantity;
    event.soldTickets += quantity;
    await this.eventRepository.save(event);

    return tickets;
  }

  async getUserTickets(userId: string): Promise<Ticket[]> {
    return this.ticketRepository.find({
      where: { user: { id: userId } },
      relations: ['event', 'event.venue'],
      order: { createdAt: 'DESC' }
    });
  }

  async getTicketById(ticketId: string, userId?: string): Promise<Ticket> {
    const whereClause: any = { id: ticketId };
    if (userId) {
      whereClause.user = { id: userId };
    }

    const ticket = await this.ticketRepository.findOne({
      where: whereClause,
      relations: ['event', 'event.venue', 'user']
    });

    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }

    return ticket;
  }

  async validateTicket(qrData: string): Promise<{ valid: boolean; ticket?: Ticket; message: string }> {
    try {
      // Verify QR signature
      const data = JSON.parse(qrData);
      const expectedSignature = this.generateSignature(data.ticketId, data.eventId, data.userId);
      
      if (data.signature !== expectedSignature) {
        return { valid: false, message: 'Invalid ticket signature' };
      }

      // Check expiry
      if (new Date(data.expiresAt) < new Date()) {
        return { valid: false, message: 'Ticket expired' };
      }

      // Get ticket
      const ticket = await this.ticketRepository.findOne({
        where: { id: data.ticketId },
        relations: ['event', 'user']
      });

      if (!ticket) {
        return { valid: false, message: 'Ticket not found' };
      }

      if (ticket.status === 'used') {
        return { valid: false, message: 'Ticket already used' };
      }

      if (ticket.status === 'cancelled') {
        return { valid: false, message: 'Ticket cancelled' };
      }

      return { valid: true, ticket, message: 'Valid ticket' };
    } catch (error) {
      return { valid: false, message: 'Invalid QR code format' };
    }
  }

  async checkInTicket(ticketId: string): Promise<Ticket> {
    const ticket = await this.ticketRepository.findOne({
      where: { id: ticketId },
      relations: ['event', 'user']
    });

    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }

    if (ticket.status === 'used') {
      throw new BadRequestException('Ticket already used');
    }

    ticket.status = 'used';
    ticket.checkedInAt = new Date();

    return this.ticketRepository.save(ticket);
  }

  async cancelTicket(ticketId: string, userId: string): Promise<Ticket> {
    const ticket = await this.ticketRepository.findOne({
      where: { id: ticketId, user: { id: userId } },
      relations: ['event']
    });

    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }

    if (ticket.status === 'used') {
      throw new BadRequestException('Cannot cancel used ticket');
    }

    // Check if cancellation is allowed (e.g., 24 hours before event)
    const eventDate = new Date(ticket.event.startDateTime);
    const now = new Date();
    const hoursUntilEvent = (eventDate.getTime() - now.getTime()) / (1000 * 60 * 60);

    if (hoursUntilEvent < 24) {
      throw new BadRequestException('Cannot cancel ticket less than 24 hours before event');
    }

    ticket.status = 'cancelled';
    return this.ticketRepository.save(ticket);
  }

  private generateTicketNumber(): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    return `NS${timestamp}${random}`.toUpperCase();
  }

  private calculateFees(price: number): number {
    // Platform fee: 2% + ₹20
    return Math.round(price * 0.02 + 20);
  }

  private async generateQRData(ticket: Ticket): Promise<any> {
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    const signature = this.generateSignature(ticket.id, ticket.event.id, ticket.user.id);

    return {
      ticketId: ticket.id,
      eventId: ticket.event.id,
      userId: ticket.user.id,
      signature,
      expiresAt
    };
  }

  private generateSignature(ticketId: string, eventId: string, userId: string): string {
    const secret = this.configService.getQrSecret();
    const data = `${ticketId}:${eventId}:${userId}`;
    return crypto.createHmac('sha256', secret).update(data).digest('hex');
  }

  private async generateQRCode(data: any): Promise<string> {
    try {
      const qrString = JSON.stringify(data);
      return await QRCode.toDataURL(qrString, {
        errorCorrectionLevel: 'M',
        type: 'image/png',
        quality: 0.92,
        margin: 1,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
    } catch (error) {
      console.error('QR Code generation failed:', error);
      throw new Error('Failed to generate QR code');
    }
  }
}
