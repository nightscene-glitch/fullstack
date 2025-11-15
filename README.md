# NightScene - Event Discovery & Ticketing Platform

A comprehensive event discovery and ticketing platform for nightlife, music events, and cultural experiences in India. Built with modern technologies and designed for scale.

## 🚀 Features

### User Features
- **Personalized Discovery**: AI-powered event recommendations based on music taste and behavior
- **Instant Booking**: One-tap ticket purchase with multiple payment options
- **Pay-at-Counter**: Reserve tickets and pay at venue with unique codes
- **Social Planning**: Share events, create group bookings, follow friends
- **Smart Search**: Natural language search with advanced filters
- **Secure Tickets**: QR codes with HMAC validation and offline support

### Organizer Features
- **Event Management**: Comprehensive event creation and management tools
- **Real-time Analytics**: Sales tracking, audience insights, conversion metrics
- **Check-in Portal**: QR code validation system for venue staff
- **Financial Dashboard**: Revenue tracking, commission reports, payouts
- **Marketing Tools**: Social media integration, promotional campaigns

## 🏗️ Architecture

### Backend Stack
- **Framework**: NestJS with TypeScript
- **Database**: PostgreSQL with TimescaleDB for analytics
- **Cache**: Redis for sessions and caching
- **Search**: Elasticsearch for event discovery
- **Queue**: Bull for background jobs
- **Payments**: Razorpay (primary), Stripe (backup)
- **Storage**: AWS S3 with CloudFront CDN

### Frontend Stack
- **Mobile**: React Native with TypeScript
- **Web Portal**: Next.js for organizer dashboard
- **State Management**: Redux Toolkit with RTK Query
- **UI Components**: Custom component library
- **Maps**: Google Maps integration
- **Push Notifications**: Firebase Cloud Messaging

### Infrastructure
- **Containerization**: Docker with multi-stage builds
- **Orchestration**: Kubernetes with auto-scaling
- **CI/CD**: GitHub Actions with automated testing
- **Monitoring**: Prometheus + Grafana + ELK stack
- **Security**: Helmet, rate limiting, fraud detection

## 🚦 Getting Started

### Prerequisites
- Node.js 20+
- Docker & Docker Compose
- PostgreSQL 15+
- Redis 7+

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/nightscene-glitch/fullstack.git
   cd fullstack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start services with Docker Compose**
   ```bash
   docker-compose up -d
   ```

5. **Run database migrations**
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

6. **Start the development server**
   ```bash
   npm run start:dev
   ```

The API will be available at `http://localhost:3000` and documentation at `http://localhost:3000/api/docs`.

### Mobile App Setup

1. **Navigate to mobile directory**
   ```bash
   cd mobile
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd ios && pod install && cd .. # For iOS
   ```

3. **Start Metro bundler**
   ```bash
   npm start
   ```

4. **Run on device/simulator**
   ```bash
   npm run ios     # For iOS
   npm run android # For Android
   ```

## 🧪 Testing

### Backend Testing
```bash
# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e

# Coverage report
npm run test:cov
```

### Mobile Testing
```bash
cd mobile
npm run test
npm run test:e2e
```

## 📊 API Documentation

### Authentication
```typescript
// Send OTP
POST /api/v1/auth/send-otp
{
  "phoneNumber": "+919876543210"
}

// Verify OTP
POST /api/v1/auth/verify-otp
{
  "otpId": "uuid",
  "otp": "123456"
}
```

### Event Discovery
```typescript
// Get personalized feed
GET /api/v1/events/feed?page=1&limit=20&city=bangalore

// Search events
POST /api/v1/events/search
{
  "query": "techno parties tonight",
  "filters": {
    "genres": ["techno", "house"],
    "priceMax": 1000
  }
}
```

### Ticket Booking
```typescript
// Book tickets
POST /api/v1/tickets/book
{
  "eventId": "uuid",
  "tickets": [
    {
      "tierId": "uuid",
      "quantity": 2
    }
  ],
  "bookingType": "instant"
}
```

For complete API documentation, visit `/api/docs` when running the server.

## 🔒 Security

### Authentication & Authorization
- JWT-based authentication with refresh tokens
- OTP verification for phone numbers
- Role-based access control (RBAC)
- Rate limiting per user and endpoint

### Data Protection
- HTTPS enforcement in production
- Input validation and sanitization
- SQL injection prevention with parameterized queries
- XSS protection with Content Security Policy

### Payment Security
- PCI DSS compliant payment processing
- Webhook signature verification
- Fraud detection algorithms
- Secure QR code generation with HMAC

### Infrastructure Security
- Container security scanning
- Secrets management with Kubernetes secrets
- Network policies and firewalls
- Regular security audits

## 📈 Monitoring & Observability

### Metrics
- Application metrics with Prometheus
- Business metrics (tickets sold, revenue)
- Performance metrics (response time, throughput)
- Error tracking and alerting

### Logging
- Structured logging with Winston
- Centralized log aggregation with ELK stack
- Request/response logging with correlation IDs
- Security event logging

### Dashboards
- Grafana dashboards for system metrics
- Business intelligence dashboards
- Real-time event analytics
- Performance monitoring

## 🚀 Deployment

### Production Deployment
```bash
# Build Docker image
docker build -t nightscene/backend:latest .

# Deploy to Kubernetes
kubectl apply -f k8s/

# Verify deployment
kubectl get pods -n nightscene-prod
```

### Environment Configuration
- **Development**: Local Docker Compose setup
- **Staging**: Kubernetes cluster with reduced resources
- **Production**: Multi-zone Kubernetes with auto-scaling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- TypeScript strict mode enabled
- ESLint + Prettier for code formatting
- Conventional commits for commit messages
- 80%+ test coverage requirement

## 📋 Roadmap

### Phase 1 (Weeks 1-8) - MVP Launch
- [x] Core backend API
- [x] Mobile app (iOS/Android)
- [x] Payment integration
- [x] Basic recommendation system
- [x] Organizer portal

### Phase 2 (Months 4-6) - Growth
- [ ] Advanced ML recommendations
- [ ] Web application
- [ ] Multi-city expansion
- [ ] Social features enhancement

### Phase 3 (Months 7-12) - Scale
- [ ] Corporate event booking
- [ ] Loyalty program
- [ ] API for third-party integrations
- [ ] International expansion

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.nightscene.in](https://docs.nightscene.in)
- **API Status**: [status.nightscene.in](https://status.nightscene.in)
- **Support Email**: support@nightscene.in
- **Developer Slack**: [Join our Slack](https://slack.nightscene.in)

## 🙏 Acknowledgments

- Built with ❤️ for the Indian nightlife community
- Inspired by the vibrant music and event culture
- Thanks to all contributors and early adopters

---

**Made with 🎵 in India**