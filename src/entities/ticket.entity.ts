import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Event } from './event.entity';

@Entity('tickets')
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  ticketNumber: string;

  @Column()
  tierName: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  fees: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalAmount: number;

  @Column({ default: 'pending' })
  status: 'pending' | 'confirmed' | 'cancelled' | 'refunded' | 'used';

  @Column({ default: 'online' })
  paymentMethod: 'online' | 'pay_at_counter';

  @Column({ nullable: true })
  paymentId: string;

  @Column({ nullable: true })
  qrCode: string;

  @Column({ type: 'json', nullable: true })
  qrData: {
    ticketId: string;
    eventId: string;
    userId: string;
    signature: string;
    expiresAt: Date;
  };

  @Column({ type: 'datetime', nullable: true })
  checkedInAt: Date;

  @Column({ type: 'datetime', nullable: true })
  expiresAt: Date;

  @Column({ type: 'json', nullable: true })
  attendeeInfo: {
    name: string;
    email?: string;
    phone?: string;
  };

  @Column({ default: false })
  isTransferable: boolean;

  @Column({ nullable: true })
  transferredTo: string;

  @Column({ type: 'datetime', nullable: true })
  transferredAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, user => user.tickets)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Event, event => event.tickets)
  @JoinColumn()
  event: Event;
}