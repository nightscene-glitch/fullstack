import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { ConfigService } from '../config/config.service';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  private otpStore = new Map<string, { otp: string; expiresAt: Date; attempts: number }>();

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async sendOtp(phone: string): Promise<{ success: boolean; message: string }> {
    // Validate phone number
    if (!this.isValidPhoneNumber(phone)) {
      throw new BadRequestException('Invalid phone number format');
    }

    // Generate OTP
    const otp = this.generateOtp();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

    // Store OTP
    this.otpStore.set(phone, { otp, expiresAt, attempts: 0 });

    // In demo mode, skip actual SMS sending
    if (this.configService.shouldSkipOtpVerification()) {
      console.log(`Demo OTP for ${phone}: ${otp}`);
      return { success: true, message: `Demo OTP: ${otp}` };
    }

    // Send SMS (implement Twilio integration here)
    try {
      await this.sendSms(phone, `Your NightScene OTP is: ${otp}. Valid for 5 minutes.`);
      return { success: true, message: 'OTP sent successfully' };
    } catch (error) {
      console.error('Failed to send OTP:', error);
      return { success: false, message: 'Failed to send OTP' };
    }
  }

  async verifyOtp(phone: string, otp: string): Promise<{ user: User; token: string }> {
    const storedOtp = this.otpStore.get(phone);

    if (!storedOtp) {
      throw new UnauthorizedException('OTP not found or expired');
    }

    if (storedOtp.expiresAt < new Date()) {
      this.otpStore.delete(phone);
      throw new UnauthorizedException('OTP expired');
    }

    if (storedOtp.attempts >= 3) {
      this.otpStore.delete(phone);
      throw new UnauthorizedException('Too many failed attempts');
    }

    // In demo mode, accept any 6-digit OTP
    const isValidOtp = this.configService.shouldSkipOtpVerification() 
      ? otp.length === 6 && /^\d+$/.test(otp)
      : storedOtp.otp === otp;

    if (!isValidOtp) {
      storedOtp.attempts++;
      throw new UnauthorizedException('Invalid OTP');
    }

    // Clear OTP
    this.otpStore.delete(phone);

    // Find or create user
    let user = await this.userRepository.findOne({ where: { phone } });
    if (!user) {
      user = this.userRepository.create({
        phone,
        isVerified: true,
        preferences: {
          genres: [],
          priceRange: { min: 0, max: 5000 },
          distance: 25,
          notifications: true
        }
      });
      user = await this.userRepository.save(user);
    } else {
      user.isVerified = true;
      await this.userRepository.save(user);
    }

    // Generate JWT token
    const payload = { sub: user.id, phone: user.phone };
    const token = this.jwtService.sign(payload);

    return { user, token };
  }

  async validateUser(userId: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return user;
  }

  private generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  private isValidPhoneNumber(phone: string): boolean {
    // Indian phone number validation
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\D/g, '').slice(-10));
  }

  private async sendSms(phone: string, message: string): Promise<void> {
    const twilioConfig = this.configService.getTwilioConfig();
    
    if (!twilioConfig.enabled) {
      console.log(`SMS would be sent to ${phone}: ${message}`);
      return;
    }

    // Implement Twilio SMS sending here
    // const twilio = require('twilio');
    // const client = twilio(twilioConfig.accountSid, twilioConfig.authToken);
    // await client.messages.create({
    //   body: message,
    //   from: twilioConfig.fromNumber,
    //   to: `+91${phone}`
    // });
  }
}