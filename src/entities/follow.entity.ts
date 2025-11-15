import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Venue } from './venue.entity';
import { Organizer } from './organizer.entity';

@Entity('follows')
export class Follow {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: 'venue' | 'organizer';

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, user => user.following)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Venue, venue => venue.followers, { nullable: true })
  @JoinColumn()
  venue: Venue;

  @ManyToOne(() => Organizer, organizer => organizer.followers, { nullable: true })
  @JoinColumn()
  organizer: Organizer;
}