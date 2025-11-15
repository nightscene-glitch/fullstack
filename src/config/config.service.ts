import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ConfigService {
  private config: any;

  constructor() {
    this.loadConfig();
  }

  private loadConfig() {
    try {
      const configPath = path.join(process.cwd(), 'config.json');
      const configFile = fs.readFileSync(configPath, 'utf8');
      this.config = JSON.parse(configFile);
    } catch (error) {
      console.error('Failed to load config.json:', error);
      process.exit(1);
    }
  }

  get(key: string): any {
    return this.getNestedValue(this.config, key);
  }

  private getNestedValue(obj: any, key: string): any {
    return key.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : undefined, obj);
  }

  // App Configuration
  getAppConfig() {
    return this.get('app');
  }

  getPort(): number {
    return this.get('app.port') || 3000;
  }

  getHost(): string {
    return this.get('app.host') || '0.0.0.0';
  }

  getBaseUrl(): string {
    return this.get('app.baseUrl') || 'http://localhost:3000';
  }

  // Database Configuration
  getDatabaseConfig() {
    return this.get('database');
  }

  // Auth Configuration
  getJwtSecret(): string {
    return this.get('auth.jwt.secret') || 'default-secret';
  }

  getJwtExpiresIn(): string {
    return this.get('auth.jwt.expiresIn') || '7d';
  }

  // Payment Configuration
  getRazorpayConfig() {
    return this.get('payments.razorpay');
  }

  getStripeConfig() {
    return this.get('payments.stripe');
  }

  // SMS Configuration
  getTwilioConfig() {
    return this.get('sms.twilio');
  }

  // Feature Flags
  isFeatureEnabled(feature: string): boolean {
    return this.get(`features.${feature}.enabled`) || false;
  }

  // Demo Configuration
  isDemoMode(): boolean {
    return this.get('demo.enabled') || false;
  }

  shouldSkipOtpVerification(): boolean {
    return this.get('demo.skipOtpVerification') || false;
  }

  shouldMockPayments(): boolean {
    return this.get('demo.mockPayments') || false;
  }

  // Security Configuration
  getQrSecret(): string {
    return this.get('security.qrCode.secret') || 'default-qr-secret';
  }

  getEncryptionKey(): string {
    return this.get('security.encryption.key') || 'default-encryption-key-32-chars';
  }
}