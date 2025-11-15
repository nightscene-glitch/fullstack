import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
  // Mock data for demonstration
  private mockEvents = [
    {
      id: '1',
      title: 'Techno Night at Toit',
      slug: 'techno-night-toit',
      description: 'Experience the best techno beats with international DJs',
      venue: {
        id: 'venue-1',
        name: 'Toit Brewpub',
        city: 'Bangalore',
        address: '298, 100 Feet Rd, Indiranagar',
        latitude: 12.9716,
        longitude: 77.5946,
      },
      startDateTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      endDateTime: new Date(Date.now() + 30 * 60 * 60 * 1000).toISOString(),
      genres: [
        { id: 'techno', name: 'Techno', color: '#8B5CF6' },
        { id: 'house', name: 'House', color: '#06B6D4' }
      ],
      images: [
        'https://images.unsplash.com/photo-1571266028243-d220c9c3b2d2?w=800',
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800'
      ],
      ticketPriceRange: { min: 500, max: 1500 },
      socialProof: {
        friendsInterested: 12,
        friendsGoing: 5,
        totalInterested: 234,
        totalGoing: 89
      },
      rating: 4.8,
      reviewCount: 156,
      isFeatured: true,
      lineup: [
        {
          id: 'artist-1',
          name: 'DJ Nucleya',
          setTime: '22:00',
          isHeadliner: true
        },
        {
          id: 'artist-2',
          name: 'KSHMR',
          setTime: '23:30',
          isHeadliner: true
        }
      ],
      ticketTiers: [
        {
          id: 'tier-1',
          name: 'Early Bird',
          price: 500,
          originalPrice: 800,
          capacity: 100,
          sold: 85,
          benefits: ['Entry before 9 PM', 'Welcome drink']
        },
        {
          id: 'tier-2',
          name: 'General',
          price: 800,
          capacity: 300,
          sold: 156,
          benefits: ['General entry']
        },
        {
          id: 'tier-3',
          name: 'VIP',
          price: 1500,
          capacity: 50,
          sold: 23,
          benefits: ['VIP area access', 'Premium bar', 'Meet & greet']
        }
      ]
    },
    {
      id: '2',
      title: 'House Music Festival',
      slug: 'house-music-festival',
      description: 'A weekend of the finest house music with top DJs',
      venue: {
        id: 'venue-2',
        name: 'Phoenix MarketCity',
        city: 'Bangalore',
        address: 'Whitefield Main Rd, Mahadevapura',
        latitude: 12.9698,
        longitude: 77.7500,
      },
      startDateTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
      endDateTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000).toISOString(),
      genres: [
        { id: 'house', name: 'House', color: '#06B6D4' },
        { id: 'deep-house', name: 'Deep House', color: '#10B981' }
      ],
      images: [
        'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
        'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800'
      ],
      ticketPriceRange: { min: 1200, max: 3000 },
      socialProof: {
        friendsInterested: 8,
        friendsGoing: 3,
        totalInterested: 567,
        totalGoing: 234
      },
      rating: 4.9,
      reviewCount: 89,
      isFeatured: true,
      lineup: [
        {
          id: 'artist-3',
          name: 'Armin van Buuren',
          setTime: '20:00',
          isHeadliner: true
        },
        {
          id: 'artist-4',
          name: 'Above & Beyond',
          setTime: '22:00',
          isHeadliner: true
        }
      ],
      ticketTiers: [
        {
          id: 'tier-4',
          name: 'General',
          price: 1200,
          capacity: 500,
          sold: 234,
          benefits: ['General entry', 'Food court access']
        },
        {
          id: 'tier-5',
          name: 'Premium',
          price: 2000,
          capacity: 200,
          sold: 89,
          benefits: ['Premium area', 'Complimentary drinks', 'Reserved seating']
        },
        {
          id: 'tier-6',
          name: 'VIP',
          price: 3000,
          capacity: 100,
          sold: 45,
          benefits: ['VIP lounge', 'Artist meet & greet', 'Exclusive merchandise']
        }
      ]
    },
    {
      id: '3',
      title: 'Bollywood Night',
      slug: 'bollywood-night',
      description: 'Dance to the latest Bollywood hits and classic favorites',
      venue: {
        id: 'venue-3',
        name: 'Hard Rock Cafe',
        city: 'Bangalore',
        address: '40, St Marks Rd, Srinivas Nagar',
        latitude: 12.9716,
        longitude: 77.6033,
      },
      startDateTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
      endDateTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 6 * 60 * 60 * 1000).toISOString(),
      genres: [
        { id: 'bollywood', name: 'Bollywood', color: '#F59E0B' },
        { id: 'punjabi', name: 'Punjabi', color: '#EF4444' }
      ],
      images: [
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
        'https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=800'
      ],
      ticketPriceRange: { min: 300, max: 1000 },
      socialProof: {
        friendsInterested: 15,
        friendsGoing: 7,
        totalInterested: 345,
        totalGoing: 156
      },
      rating: 4.6,
      reviewCount: 234,
      isFeatured: false,
      lineup: [
        {
          id: 'artist-5',
          name: 'DJ Chetas',
          setTime: '21:00',
          isHeadliner: true
        }
      ],
      ticketTiers: [
        {
          id: 'tier-7',
          name: 'Cover Charge',
          price: 300,
          capacity: 200,
          sold: 123,
          benefits: ['Entry', 'Dance floor access']
        },
        {
          id: 'tier-8',
          name: 'Couple Entry',
          price: 500,
          capacity: 100,
          sold: 67,
          benefits: ['Couple entry', 'Welcome drinks']
        },
        {
          id: 'tier-9',
          name: 'VIP Table',
          price: 1000,
          capacity: 20,
          sold: 12,
          benefits: ['Reserved table', 'Bottle service', 'Priority entry']
        }
      ]
    }
  ];

  async getEventFeed(params: { page: number; limit: number; city?: string }) {
    const { page = 1, limit = 20, city } = params;
    let events = [...this.mockEvents];

    // Filter by city if provided
    if (city) {
      events = events.filter(event => 
        event.venue.city.toLowerCase() === city.toLowerCase()
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedEvents = events.slice(startIndex, endIndex);

    return {
      events: paginatedEvents,
      pagination: {
        page,
        limit,
        total: events.length,
        hasNext: endIndex < events.length,
        hasPrev: page > 1,
      },
      filters: {
        availableGenres: [
          { id: 'techno', name: 'Techno', count: 1 },
          { id: 'house', name: 'House', count: 2 },
          { id: 'bollywood', name: 'Bollywood', count: 1 },
        ],
        priceRange: { min: 300, max: 3000 },
        cities: ['Bangalore', 'Mumbai', 'Delhi', 'Pune'],
      }
    };
  }

  async getTrendingEvents(city?: string) {
    let events = [...this.mockEvents];
    
    if (city) {
      events = events.filter(event => 
        event.venue.city.toLowerCase() === city.toLowerCase()
      );
    }

    // Sort by social proof and rating
    events.sort((a, b) => {
      const scoreA = a.socialProof.totalInterested + a.rating * 100;
      const scoreB = b.socialProof.totalInterested + b.rating * 100;
      return scoreB - scoreA;
    });

    return {
      events: events.slice(0, 10),
      title: 'Trending Events',
      subtitle: city ? `in ${city}` : 'in your area'
    };
  }

  async getTonightEvents(city?: string) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    let events = this.mockEvents.filter(event => {
      const eventDate = new Date(event.startDateTime);
      return eventDate >= today && eventDate < tomorrow;
    });

    if (city) {
      events = events.filter(event => 
        event.venue.city.toLowerCase() === city.toLowerCase()
      );
    }

    return {
      events,
      title: 'Tonight\'s Events',
      subtitle: city ? `in ${city}` : 'in your area'
    };
  }

  async getWeekendEvents(city?: string) {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysUntilFriday = (5 - dayOfWeek + 7) % 7;
    const friday = new Date(today);
    friday.setDate(today.getDate() + daysUntilFriday);
    
    const sunday = new Date(friday);
    sunday.setDate(friday.getDate() + 2);
    sunday.setHours(23, 59, 59, 999);

    let events = this.mockEvents.filter(event => {
      const eventDate = new Date(event.startDateTime);
      return eventDate >= friday && eventDate <= sunday;
    });

    if (city) {
      events = events.filter(event => 
        event.venue.city.toLowerCase() === city.toLowerCase()
      );
    }

    return {
      events,
      title: 'Weekend Events',
      subtitle: city ? `in ${city}` : 'in your area'
    };
  }

  async searchEvents(searchQuery: any) {
    const { query, filters = {} } = searchQuery;
    let events = [...this.mockEvents];

    // Text search
    if (query) {
      const searchTerm = query.toLowerCase();
      events = events.filter(event => 
        event.title.toLowerCase().includes(searchTerm) ||
        event.description.toLowerCase().includes(searchTerm) ||
        event.venue.name.toLowerCase().includes(searchTerm) ||
        event.genres.some(genre => genre.name.toLowerCase().includes(searchTerm))
      );
    }

    // Apply filters
    if (filters.genres && filters.genres.length > 0) {
      events = events.filter(event =>
        event.genres.some(genre => filters.genres.includes(genre.id))
      );
    }

    if (filters.city) {
      events = events.filter(event =>
        event.venue.city.toLowerCase() === filters.city.toLowerCase()
      );
    }

    if (filters.priceMin !== undefined) {
      events = events.filter(event => event.ticketPriceRange.min >= filters.priceMin);
    }

    if (filters.priceMax !== undefined) {
      events = events.filter(event => event.ticketPriceRange.max <= filters.priceMax);
    }

    return {
      results: {
        events,
        venues: [], // Would include venue search results
        artists: [], // Would include artist search results
      },
      suggestions: [
        'techno parties tonight',
        'house music weekend',
        'bollywood events bangalore',
        'live music concerts'
      ],
      totalResults: events.length,
      query,
      filters
    };
  }

  async getEventDetail(id: string) {
    const event = this.mockEvents.find(e => e.id === id);
    
    if (!event) {
      throw new Error('Event not found');
    }

    return {
      ...event,
      userInteraction: {
        isInterested: false,
        isGoing: false,
        hasReviewed: false,
      },
      reviews: [
        {
          id: 'review-1',
          user: { name: 'Arjun K.', avatar: 'https://i.pravatar.cc/150?img=1' },
          rating: 5,
          comment: 'Amazing event! Great music and atmosphere.',
          createdAt: '2024-01-15T10:30:00Z',
          helpful: 12
        },
        {
          id: 'review-2',
          user: { name: 'Priya S.', avatar: 'https://i.pravatar.cc/150?img=2' },
          rating: 4,
          comment: 'Good vibes, but could be better organized.',
          createdAt: '2024-01-14T15:45:00Z',
          helpful: 8
        }
      ],
      similarEvents: this.mockEvents.filter(e => e.id !== id).slice(0, 3),
      weatherForecast: {
        temperature: 24,
        condition: 'Clear',
        humidity: 65,
        windSpeed: 12
      }
    };
  }

  async getEventsByVenue(venueId: string) {
    const events = this.mockEvents.filter(event => event.venue.id === venueId);
    
    return {
      events,
      venue: events[0]?.venue || null,
      title: `Events at ${events[0]?.venue.name || 'Venue'}`,
      totalEvents: events.length
    };
  }

  async getEventsByGenre(genre: string) {
    const events = this.mockEvents.filter(event =>
      event.genres.some(g => g.id === genre || g.name.toLowerCase() === genre.toLowerCase())
    );

    return {
      events,
      genre: events[0]?.genres.find(g => g.id === genre || g.name.toLowerCase() === genre.toLowerCase()),
      title: `${genre.charAt(0).toUpperCase() + genre.slice(1)} Events`,
      totalEvents: events.length
    };
  }
}