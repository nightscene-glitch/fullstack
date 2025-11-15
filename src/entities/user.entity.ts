import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Ticket } from './ticket.entity';
import { Follow } from './follow.entity';
import { UserPreference } from './user-preference.entity';
import { Event } from './event.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ type: 'date', nullable: true })
  dateOfBirth: Date;

  @Column({ nullable: true })
  city: string;

  @Column({ type: 'decimal', precision: 10, scale: 8, nullable: true })
  latitude: number;

  @Column({ type: 'decimal', precision: 11, scale: 8, nullable: true })
  longitude: number;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ default: false })
  isOrganizer: boolean;

  @Column({ type: 'int', default: 0 })
  loyaltyPoints: number;

  @Column({ type: 'json', nullable: true })
  socialProfiles: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };

  @Column({ type: 'json', nullable: true })
  preferences: {
    genres: string[];
    priceRange: { min: number; max: number };
    distance: number;
    notifications: boolean;
  };

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Ticket, ticket => ticket.user)
  tickets: Ticket[];

  @OneToMany(() => Follow, follow => follow.user)
  following: Follow[];

  @OneToMany(() => UserPreference, preference => preference.user)
  userPreferences: UserPreference[];

  @ManyToMany(() => Event, event => event.attendees)
  @JoinTable()
  interestedEvents: Event[];
}