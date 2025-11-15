import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { EventsService } from './events.service';

@ApiTags('Events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get('feed')
  @ApiOperation({ summary: 'Get personalized event feed' })
  @ApiResponse({ status: 200, description: 'Personalized event recommendations' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'city', required: false, type: String })
  async getEventFeed(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('city') city?: string,
  ) {
    const pageNum = page ? parseInt(page, 10) : 1;
    const limitNum = limit ? parseInt(limit, 10) : 20;
    return this.eventsService.getEventFeed({ page: pageNum, limit: limitNum, city });
  }

  @Get('trending')
  @ApiOperation({ summary: 'Get trending events' })
  @ApiResponse({ status: 200, description: 'Trending events in the city' })
  async getTrendingEvents(@Query('city') city?: string) {
    return this.eventsService.getTrendingEvents(city);
  }

  @Get('tonight')
  @ApiOperation({ summary: 'Get events happening tonight' })
  @ApiResponse({ status: 200, description: 'Events happening tonight' })
  async getTonightEvents(@Query('city') city?: string) {
    return this.eventsService.getTonightEvents(city);
  }

  @Get('weekend')
  @ApiOperation({ summary: 'Get weekend events' })
  @ApiResponse({ status: 200, description: 'Weekend events' })
  async getWeekendEvents(@Query('city') city?: string) {
    return this.eventsService.getWeekendEvents(city);
  }

  @Post('search')
  @ApiOperation({ summary: 'Search events' })
  @ApiResponse({ status: 200, description: 'Search results' })
  async searchEvents(@Body() searchQuery: any) {
    return this.eventsService.searchEvents(searchQuery);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get event details' })
  @ApiResponse({ status: 200, description: 'Event details' })
  async getEventDetail(@Param('id') id: string) {
    return this.eventsService.getEventDetail(id);
  }

  @Get('venue/:venueId')
  @ApiOperation({ summary: 'Get events by venue' })
  @ApiResponse({ status: 200, description: 'Events at the venue' })
  async getEventsByVenue(@Param('venueId') venueId: string) {
    return this.eventsService.getEventsByVenue(venueId);
  }

  @Get('genre/:genre')
  @ApiOperation({ summary: 'Get events by genre' })
  @ApiResponse({ status: 200, description: 'Events of the genre' })
  async getEventsByGenre(@Param('genre') genre: string) {
    return this.eventsService.getEventsByGenre(genre);
  }
}