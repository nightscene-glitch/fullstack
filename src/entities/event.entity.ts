import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, ManyToMany, JoinColumn } from 'typeorm';
import { Venue } from './venue.entity';
import { Organizer } from './organizer.entity';
import { Ticket } from './ticket.entity';
import { Genre } from './genre.entity';
import { User } from './user.entity';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'datetime' })
  startDateTime: Date;

  @Column({ type: 'datetime', nullable: true })
  endDateTime: Date;

  @Column({ type: 'json' })
  images: string[];

  @Column({ type: 'json' })
  ticketPriceRange: {
    min: number;
    max: number;
  };

  @Column({ type: 'json' })
  ticketTiers: Array<{
    name: string;
    price: number;
    capacity: number;
    sold: number;
    description: string;
  }>;

  @Column({ type: 'int' })
  totalCapacity: number;

  @Column({ type: 'int', default: 0 })
  soldTickets: number;

  @Column({ type: 'int', default: 0 })
  interestedCount: number;

  @Column({ type: 'int', default: 0 })
  goingCount: number;

  @Column({ default: 'active' })
  status: 'draft' | 'active' | 'cancelled' | 'completed';

  @Column({ type: 'json', nullable: true })
  socialProof: {
    attendingFriends: string[];
    totalAttending: number;
    rating: number;
    reviews: number;
  };

  @Column({ type: 'json', nullable: true })
  ageRestriction: {
    minAge: number;
    maxAge?: number;
  };

  @Column({ type: 'json', nullable: true })
  tags: string[];

  @Column({ default: false })
  isFeatured: boolean;

  @Column({ default: false })
  allowsPayAtCounter: boolean;

  @Column({ type: 'decimal', precision: 3, scale: 2, default: 0 })
  commissionRate: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Venue, venue => venue.events)
  @JoinColumn()
  venue: Venue;

  @ManyToOne(() => Organizer, organizer => organizer.events)
  @JoinColumn()
  organizer: Organizer;

  @OneToMany(() => Ticket, ticket => ticket.event)
  tickets: Ticket[];

  @ManyToMany(() => Genre, genre => genre.events)
  genres: Genre[];

  @ManyToMany(() => User, user => user.interestedEvents)
  attendees: User[];
}