import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async sendOTP(phoneNumber: string) {
    // Mock OTP sending
    const otpId = Math.random().toString(36).substring(2, 15);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    console.log(`Sending OTP ${otp} to ${phoneNumber}`);
    
    return {
      success: true,
      message: 'OTP sent successfully',
      otpId,
      // In development, return the OTP for testing
      ...(process.env.NODE_ENV === 'development' && { otp })
    };
  }

  async verifyOTP(otpId: string, otp: string, deviceInfo?: any) {
    // Mock OTP verification
    const isValid = otp === '123456' || otp.length === 6;
    
    if (!isValid) {
      return {
        success: false,
        message: 'Invalid OTP'
      };
    }

    const mockUser = {
      id: 'user-1',
      phoneNumber: '+919876543210',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      city: 'Bangalore',
      profileImage: 'https://i.pravatar.cc/150?img=3',
      musicPreferences: {
        genres: ['techno', 'house', 'trance'],
        artists: ['DJ Nucleya', 'KSHMR', 'Armin van Buuren']
      },
      isVerified: true,
      createdAt: '2024-01-01T00:00:00Z'
    };

    const accessToken = 'mock-jwt-access-token';
    const refreshToken = 'mock-jwt-refresh-token';

    return {
      success: true,
      accessToken,
      refreshToken,
      user: mockUser,
      isNewUser: false
    };
  }

  async refreshToken(refreshToken: string) {
    // Mock token refresh
    return {
      accessToken: 'new-mock-jwt-access-token',
      refreshToken: 'new-mock-jwt-refresh-token'
    };
  }
}