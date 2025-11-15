import { Controller, Get, Post, Body, Param, UseGuards, Request, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TicketsService } from './tickets.service';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@ApiTags('Tickets')
@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('book')
  async bookTicket(
    @Request() req,
    @Body() body: {
      eventId: string;
      tierName: string;
      quantity: number;
      paymentMethod: 'online' | 'pay_at_counter';
      attendeeInfo?: any;
    }
  ) {
    return this.ticketsService.bookTicket(
      req.user.id,
      body.eventId,
      body.tierName,
      body.quantity,
      body.paymentMethod,
      body.attendeeInfo
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('my-tickets')
  async getMyTickets(@Request() req) {
    return this.ticketsService.getUserTickets(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getTicket(@Param('id') id: string, @Request() req) {
    return this.ticketsService.getTicketById(id, req.user.id);
  }

  @Post('validate')
  async validateTicket(@Body() body: { qrData: string }) {
    return this.ticketsService.validateTicket(body.qrData);
  }

  @Post('checkin/:id')
  async checkInTicket(@Param('id') id: string) {
    return this.ticketsService.checkInTicket(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id/cancel')
  async cancelTicket(@Param('id') id: string, @Request() req) {
    return this.ticketsService.cancelTicket(id, req.user.id);
  }
}
