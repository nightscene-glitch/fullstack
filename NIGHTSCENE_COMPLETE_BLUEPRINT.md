# NIGHTSCENE: Complete End-to-End Event Discovery & Ticketing Platform
## Production-Ready Blueprint & Technical Specification

---

# 1. PRODUCT SPECIFICATION & VISION

## 1.1 Product Vision & Brand Identity

**Mission**: Transform nightlife discovery in India by creating the most immersive, personalized, and seamless event ticketing experience that connects music lovers with their perfect nights out.

**Brand Positioning**: Premium, music-centric event discovery platform with cinematic visual appeal and intelligent personalization.

**Visual Identity**:
- **Theme**: Neo-noir with neon accents
- **Primary Colors**: Deep black (#0A0A0A), Electric purple (#8B5CF6), Neon cyan (#06B6D4), Gold accent (#F59E0B)
- **Typography**: Bold, high-contrast fonts with cinematic appeal
- **Visual Style**: High-contrast cards, gradient overlays, smooth animations, immersive dark UI

## 1.2 Core Use Cases & User Personas

### Primary Users:
1. **Music Enthusiasts (18-30)**: Frequent club-goers, festival attendees, early adopters
2. **Social Planners (25-35)**: Group organizers, birthday party planners, corporate event coordinators
3. **Casual Explorers (20-40)**: Occasional nightlife participants seeking curated experiences

### Core Use Cases:
1. **Instant Discovery**: Find tonight's events based on location, music taste, and social circle
2. **Smart Recommendations**: AI-powered suggestions based on listening history, past events, and friend activity
3. **Seamless Booking**: One-tap ticket purchase or pay-at-counter reservations
4. **Social Planning**: Share events, create group bookings, coordinate with friends
5. **Venue Following**: Track favorite venues, artists, and promoters
6. **Secure Entry**: QR-based tickets with offline validation

## 1.3 Complete User Flows

### Flow 1: New User Onboarding
```
1. App Launch → Splash Screen (2s cinematic animation)
2. Welcome Screen → "Discover Your Scene" CTA
3. Phone Number Input → OTP Verification
4. Music Taste Setup → Genre selection (visual cards)
5. Location Permission → City selection
6. Social Permissions → Contact sync (optional)
7. Notification Preferences → Push/SMS settings
8. Welcome Tour → Key features highlight (3 screens)
9. Main Feed → Personalized event recommendations
```

### Flow 2: Event Discovery & Booking
```
1. Main Feed → Scroll through personalized events
2. Event Card Tap → Event Detail Screen
3. Event Details → Photos, lineup, venue info, reviews
4. Ticket Selection → Choose tier, quantity
5. Checkout Options → Instant pay OR Reserve & pay at counter
6. Payment → UPI/Card/Wallet integration
7. Confirmation → Ticket generated with QR code
8. My Tickets → Secure storage with offline access
9. Event Day → QR scan at venue entry
```

### Flow 3: Social Planning
```
1. Event Discovery → Find interesting event
2. Share Button → Send to friends via WhatsApp/Instagram
3. Group Planning → Create group booking intent
4. Friend Responses → Track who's interested/confirmed
5. Group Checkout → Split payment or single payer
6. Group Tickets → Individual QR codes for each member
7. Event Updates → Shared notifications for group
```

### Flow 4: Venue/Artist Following
```
1. Event Detail → Tap venue/artist name
2. Profile Page → Past events, upcoming shows, photos
3. Follow Button → Subscribe to updates
4. Notification Settings → Choose update frequency
5. Feed Integration → Followed content prioritized
6. Exclusive Access → Early bird tickets, VIP offers
```

## 1.4 Pain Points Solved vs SortMyScene

### SortMyScene Limitations:
- Generic, non-personalized event listings
- Poor mobile UX with cluttered interface
- Limited social features and sharing
- Basic search without intelligent filtering
- No reservation system for pay-at-counter
- Minimal venue/artist relationship building
- Weak recommendation engine
- Limited payment options

### NightScene Solutions:
- **AI-Powered Personalization**: Machine learning recommendations based on music taste, location, social graph
- **Immersive Mobile-First UX**: Cinematic dark theme, smooth animations, intuitive navigation
- **Social Integration**: Friend activity, group planning, social proof in recommendations
- **Smart Search & Filters**: Natural language search, genre-based filtering, mood-based discovery
- **Flexible Payment Options**: Instant booking + pay-at-counter reservations with tokenization
- **Relationship Building**: Follow venues/artists, exclusive access, loyalty rewards
- **Advanced Recommendation Engine**: Collaborative filtering, behavioral analysis, real-time adaptation
- **Comprehensive Payment Stack**: UPI, cards, wallets, BNPL integration

## 1.5 Market Differentiation Strategy

### Competitive Advantages:
1. **Hyper-Personalization**: Most advanced recommendation system in Indian event space
2. **Social-First Design**: Built for group planning and social discovery
3. **Premium UX**: Cinematic, immersive interface that makes event discovery exciting
4. **Flexible Booking**: Only platform offering both instant and pay-at-counter options
5. **Artist/Venue Ecosystem**: Deep relationships with venues for exclusive content and early access
6. **Data-Driven Insights**: Advanced analytics for both users and organizers

---

# 2. COMPLETE UX/UI BLUEPRINT

## 2.1 Design System Foundation

### Color Palette:
```css
/* Primary Colors */
--bg-primary: #0A0A0A;        /* Deep Black */
--bg-secondary: #1A1A1A;      /* Dark Gray */
--bg-tertiary: #2A2A2A;       /* Medium Gray */

/* Accent Colors */
--accent-primary: #8B5CF6;    /* Electric Purple */
--accent-secondary: #06B6D4;  /* Neon Cyan */
--accent-tertiary: #F59E0B;   /* Gold */

/* Semantic Colors */
--success: #10B981;           /* Green */
--warning: #F59E0B;           /* Amber */
--error: #EF4444;             /* Red */
--info: #3B82F6;              /* Blue */

/* Text Colors */
--text-primary: #FFFFFF;      /* White */
--text-secondary: #D1D5DB;    /* Light Gray */
--text-tertiary: #9CA3AF;     /* Medium Gray */
--text-muted: #6B7280;        /* Dark Gray */
```

### Typography System:
```css
/* Font Stack */
font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;

/* Type Scale */
--text-xs: 12px;      /* Captions, labels */
--text-sm: 14px;      /* Body text, descriptions */
--text-base: 16px;    /* Default body */
--text-lg: 18px;      /* Subheadings */
--text-xl: 20px;      /* Card titles */
--text-2xl: 24px;     /* Section headers */
--text-3xl: 30px;     /* Page titles */
--text-4xl: 36px;     /* Hero text */

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-black: 900;
```

### Spacing System:
```css
/* Spacing Scale (8px base) */
--space-1: 4px;       /* xs */
--space-2: 8px;       /* sm */
--space-3: 12px;      /* md */
--space-4: 16px;      /* lg */
--space-5: 20px;      /* xl */
--space-6: 24px;      /* 2xl */
--space-8: 32px;      /* 3xl */
--space-10: 40px;     /* 4xl */
--space-12: 48px;     /* 5xl */
--space-16: 64px;     /* 6xl */
```

## 2.2 Component Library

### Core Components:

#### EventCard Component:
```
┌─────────────────────────────────────┐
│ [Event Image with Gradient Overlay] │
│                                     │
│ ┌─ Genre Tag ─┐  ┌─ Price Tag ─┐   │
│ │   TECHNO    │  │   ₹500      │   │
│ └─────────────┘  └─────────────┘   │
│                                     │
│ Event Title (Bold, White)           │
│ Venue Name (Medium, Gray)           │
│ Date & Time (Small, Cyan)           │
│                                     │
│ [👥 12 friends interested]          │
│ [⭐ 4.8 rating • 234 reviews]      │
│                                     │
│ ┌─ Book Now ─┐  ┌─ Share ─┐        │
│ │   Button   │  │  Icon   │        │
│ └────────────┘  └─────────┘        │
└─────────────────────────────────────┘
```

#### Navigation Bar:
```
┌─────────────────────────────────────┐
│ [🏠] [🔍] [🎫] [👤] [⚙️]          │
│ Home Search Tickets Profile More    │
└─────────────────────────────────────┘
```

#### Search Interface:
```
┌─────────────────────────────────────┐
│ ┌─ Search Bar with Voice ─────────┐ │
│ │ 🔍 "Find events, venues..."  🎤 │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Quick Filters:                      │
│ [Tonight] [This Weekend] [Techno]   │
│ [House] [Hip-Hop] [Near Me]         │
│                                     │
│ Recent Searches:                    │
│ • "Techno events in Bangalore"     │
│ • "Weekend parties Gurgaon"        │
└─────────────────────────────────────┘
```

## 2.3 Key Screen Wireframes

### Home Feed Screen:
```
┌─────────────────────────────────────┐
│ ┌─ Header ─────────────────────────┐ │
│ │ 📍 Bangalore    🔔 [3]    👤    │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─ Quick Actions ─────────────────┐ │
│ │ [Tonight] [Weekend] [Followed]  │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Recommended for You                 │
│ ┌─ Event Card 1 ─────────────────┐ │
│ │ [Image] Techno Night @ Toit    │ │
│ │ Tonight 9 PM • ₹800            │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─ Event Card 2 ─────────────────┐ │
│ │ [Image] House Music Festival   │ │
│ │ Sat 6 PM • ₹1200               │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Trending in Your City               │
│ [Horizontal scroll of event cards]  │
│                                     │
│ ┌─ Bottom Navigation ─────────────┐ │
│ │ [Home] [Search] [Tickets] [Me]  │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

### Event Detail Screen:
```
┌─────────────────────────────────────┐
│ ┌─ Hero Image with Back Button ───┐ │
│ │ ← [Full-screen event image]     │ │
│ │   with gradient overlay         │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─ Event Info ────────────────────┐ │
│ │ Event Title (Large, Bold)       │ │
│ │ 📍 Venue Name • 📅 Date/Time   │ │
│ │ 🎵 Genre Tags                   │ │
│ │ ⭐ 4.8 (234 reviews)           │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─ Social Proof ──────────────────┐ │
│ │ 👥 12 friends interested        │ │
│ │ [Friend avatars...]             │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─ Ticket Options ────────────────┐ │
│ │ Early Bird    ₹500  [Select]    │ │
│ │ General       ₹800  [Select]    │ │
│ │ VIP          ₹1500  [Select]    │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─ Action Buttons ────────────────┐ │
│ │ [Book Now] [Reserve] [Share]    │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Description, Lineup, Reviews...     │
└─────────────────────────────────────┘
```

## 2.4 Animation & Interaction Design

### Key Animations:
1. **Card Reveal**: Staggered fade-in with slide-up (300ms ease-out)
2. **Image Loading**: Shimmer effect with smooth fade-in
3. **Button Press**: Scale down (0.95) with haptic feedback
4. **Screen Transitions**: Slide transitions with blur overlay
5. **Pull-to-Refresh**: Custom neon loading spinner
6. **Ticket Generation**: Cinematic reveal with particle effects

### Micro-Interactions:
- Heart animation for favorites (scale + color change)
- Share button with expanding options
- Search bar focus with glow effect
- Ticket QR code with scanning animation
- Success states with confetti particles

---

# 3. COMPLETE FEATURE SET & TECHNICAL ARCHITECTURE

## 3.1 Core Features (User-Facing)

### 3.1.1 Personalized Event Discovery
- **AI-Powered Feed**: Machine learning recommendations based on:
  - Music streaming history (Spotify/Apple Music integration)
  - Past event attendance and ratings
  - Social graph and friend activity
  - Location patterns and preferences
  - Time-based behavior analysis

- **Smart Search & Filters**:
  - Natural language search ("techno parties tonight")
  - Genre-based filtering with sub-genres
  - Location radius with map integration
  - Price range and date filters
  - Mood-based discovery ("chill vibes", "high energy")

- **Discovery Modes**:
  - Tonight's Events (real-time availability)
  - This Weekend (curated weekend plans)
  - Followed Venues/Artists (priority content)
  - Trending (popularity-based ranking)
  - Nearby (location-aware suggestions)

### 3.1.2 Instant Ticket Purchase & Reservations
- **Instant Checkout**:
  - One-tap purchase with saved payment methods
  - UPI, credit/debit cards, digital wallets
  - Razorpay and Stripe integration
  - BNPL options (Simpl, LazyPay)

- **Pay-at-Counter Reservations**:
  - Tokenized reservation system (12-24 hour expiry)
  - SMS/WhatsApp confirmation with unique code
  - Venue integration for counter validation
  - Automatic expiry with waitlist promotion

- **Ticket Management**:
  - Secure QR codes with HMAC validation
  - Offline ticket storage and display
  - Transfer tickets to friends
  - Refund and cancellation handling

### 3.1.3 Social Features & Planning
- **Friend Integration**:
  - Contact sync with privacy controls
  - Friend activity feed (events attended, interested)
  - Social proof in recommendations
  - Friend-based event discovery

- **Group Planning**:
  - Create group booking intents
  - Share events via WhatsApp/Instagram
  - Track friend responses (interested/going)
  - Split payment options
  - Group chat integration

- **Social Sharing**:
  - Instagram Stories integration with branded templates
  - WhatsApp event sharing with rich previews
  - Social media post generation
  - Event check-in sharing

### 3.1.4 Follow System & Loyalty
- **Venue Following**:
  - Subscribe to venue updates
  - Exclusive early access to tickets
  - Venue loyalty points and rewards
  - Personalized venue recommendations

- **Artist/Promoter Following**:
  - Artist tour notifications
  - Exclusive content and behind-the-scenes
  - Meet & greet opportunities
  - Fan community features

### 3.1.5 Notification Engine
- **Smart Notifications**:
  - Event reminders (customizable timing)
  - Friend activity updates
  - Price drop alerts
  - Last-minute ticket availability
  - Weather-based event suggestions

- **Delivery Channels**:
  - Push notifications (rich media)
  - SMS for critical updates
  - WhatsApp Business API integration
  - Email newsletters

## 3.2 Organizer Features (Business-Facing)

### 3.2.1 Event Creation & Management
- **Event Builder**:
  - Drag-and-drop event creation
  - Rich media upload (images, videos, audio)
  - Lineup management with artist profiles
  - Venue integration and mapping
  - SEO optimization tools

- **Ticket Configuration**:
  - Multiple ticket tiers with pricing
  - Early bird and dynamic pricing
  - Capacity management per tier
  - Group discounts and promo codes
  - Waitlist management

### 3.2.2 Real-Time Analytics Dashboard
- **Sales Analytics**:
  - Real-time ticket sales tracking
  - Revenue forecasting
  - Conversion funnel analysis
  - Customer acquisition metrics
  - Refund and cancellation tracking

- **Audience Insights**:
  - Demographic breakdown
  - Geographic distribution
  - Social media engagement
  - Repeat customer analysis
  - Friend referral tracking

### 3.2.3 Check-In Portal & Validation
- **QR Code Validation**:
  - Real-time ticket verification
  - Duplicate detection and prevention
  - Offline validation capability
  - Staff access controls
  - Entry analytics

- **Event Day Management**:
  - Live attendance tracking
  - Capacity monitoring
  - Staff communication tools
  - Emergency broadcast system
  - Post-event feedback collection

### 3.2.4 Financial Management
- **Settlement Reports**:
  - Automated commission calculation
  - Payment reconciliation
  - Tax reporting integration
  - Payout scheduling
  - Financial analytics

- **Commission Structure**:
  - Tiered commission rates (5-15% based on volume)
  - Performance bonuses for high-rated events
  - Loyalty discounts for regular organizers
  - Payment gateway fee transparency

---

# 4. DATA MODELS & DATABASE SCHEMA

## 4.1 Core Entity Relationships

```sql
-- Users table with comprehensive profile data
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phone_number VARCHAR(15) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    date_of_birth DATE,
    gender VARCHAR(20),
    city VARCHAR(100),
    profile_image_url TEXT,
    music_preferences JSONB, -- Spotify/Apple Music integration data
    notification_preferences JSONB,
    social_links JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_active_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE
);

-- Venues with comprehensive location and metadata
CREATE TABLE venues (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    postal_code VARCHAR(20),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    capacity INTEGER,
    venue_type VARCHAR(50), -- club, bar, restaurant, outdoor, etc.
    amenities JSONB, -- parking, valet, food, etc.
    contact_info JSONB,
    social_links JSONB,
    images JSONB,
    rating DECIMAL(3, 2) DEFAULT 0,
    review_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_active BOOLEAN DEFAULT TRUE
);

-- Promoters/Organizers
CREATE TABLE promoters (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    company_name VARCHAR(255),
    business_type VARCHAR(100),
    description TEXT,
    website_url TEXT,
    social_links JSONB,
    verification_status VARCHAR(50) DEFAULT 'pending',
    commission_rate DECIMAL(5, 2) DEFAULT 10.00,
    total_events_organized INTEGER DEFAULT 0,
    total_tickets_sold INTEGER DEFAULT 0,
    average_rating DECIMAL(3, 2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_active BOOLEAN DEFAULT TRUE
);

-- Artists with music genre and social data
CREATE TABLE artists (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    bio TEXT,
    genres JSONB, -- array of genre IDs
    profile_image_url TEXT,
    social_links JSONB,
    spotify_id VARCHAR(255),
    apple_music_id VARCHAR(255),
    follower_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE
);

-- Events with comprehensive metadata
CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    venue_id UUID REFERENCES venues(id) ON DELETE CASCADE,
    promoter_id UUID REFERENCES promoters(id) ON DELETE CASCADE,
    event_type VARCHAR(50), -- party, concert, festival, etc.
    genres JSONB, -- array of genre IDs
    start_datetime TIMESTAMP WITH TIME ZONE NOT NULL,
    end_datetime TIMESTAMP WITH TIME ZONE,
    doors_open_time TIMESTAMP WITH TIME ZONE,
    age_restriction INTEGER DEFAULT 18,
    dress_code VARCHAR(255),
    images JSONB,
    lineup JSONB, -- array of artist objects with set times
    ticket_sales_start TIMESTAMP WITH TIME ZONE,
    ticket_sales_end TIMESTAMP WITH TIME ZONE,
    total_capacity INTEGER,
    status VARCHAR(50) DEFAULT 'draft', -- draft, published, cancelled, completed
    featured BOOLEAN DEFAULT FALSE,
    rating DECIMAL(3, 2) DEFAULT 0,
    review_count INTEGER DEFAULT 0,
    view_count INTEGER DEFAULT 0,
    share_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_active BOOLEAN DEFAULT TRUE
);

-- Ticket tiers with dynamic pricing
CREATE TABLE ticket_tiers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_id UUID REFERENCES events(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    original_price DECIMAL(10, 2), -- for discount display
    capacity INTEGER NOT NULL,
    sold_count INTEGER DEFAULT 0,
    reserved_count INTEGER DEFAULT 0,
    sale_start_datetime TIMESTAMP WITH TIME ZONE,
    sale_end_datetime TIMESTAMP WITH TIME ZONE,
    tier_type VARCHAR(50) DEFAULT 'general', -- early_bird, general, vip, etc.
    benefits JSONB, -- perks included with this tier
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_active BOOLEAN DEFAULT TRUE
);

-- Orders with comprehensive payment tracking
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    event_id UUID REFERENCES events(id) ON DELETE CASCADE,
    order_number VARCHAR(50) UNIQUE NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    discount_amount DECIMAL(10, 2) DEFAULT 0,
    tax_amount DECIMAL(10, 2) DEFAULT 0,
    platform_fee DECIMAL(10, 2) DEFAULT 0,
    payment_method VARCHAR(50), -- upi, card, wallet, etc.
    payment_status VARCHAR(50) DEFAULT 'pending',
    payment_gateway VARCHAR(50), -- razorpay, stripe, etc.
    payment_gateway_order_id VARCHAR(255),
    payment_gateway_payment_id VARCHAR(255),
    promo_code VARCHAR(50),
    booking_type VARCHAR(50) DEFAULT 'instant', -- instant, reservation
    reservation_expires_at TIMESTAMP WITH TIME ZONE,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Individual tickets with QR codes
CREATE TABLE tickets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    ticket_tier_id UUID REFERENCES ticket_tiers(id) ON DELETE CASCADE,
    ticket_number VARCHAR(50) UNIQUE NOT NULL,
    qr_code_data TEXT NOT NULL, -- HMAC signed data
    holder_name VARCHAR(255),
    holder_email VARCHAR(255),
    holder_phone VARCHAR(15),
    status VARCHAR(50) DEFAULT 'valid', -- valid, used, cancelled, transferred
    used_at TIMESTAMP WITH TIME ZONE,
    transferred_to_user_id UUID REFERENCES users(id),
    transferred_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User follows (venues, artists, promoters)
CREATE TABLE follows (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    followable_type VARCHAR(50) NOT NULL, -- venue, artist, promoter
    followable_id UUID NOT NULL,
    notification_enabled BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, followable_type, followable_id)
);

-- User interests and event interactions
CREATE TABLE user_interests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    event_id UUID REFERENCES events(id) ON DELETE CASCADE,
    interest_type VARCHAR(50) NOT NULL, -- viewed, liked, shared, interested, going
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, event_id, interest_type)
);

-- Reviews and ratings
CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    event_id UUID REFERENCES events(id) ON DELETE CASCADE,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT,
    images JSONB,
    helpful_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_verified BOOLEAN DEFAULT FALSE, -- verified attendance
    UNIQUE(user_id, event_id)
);

-- Genres taxonomy
CREATE TABLE genres (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    parent_id UUID REFERENCES genres(id),
    description TEXT,
    color_hex VARCHAR(7), -- for UI theming
    icon_name VARCHAR(50),
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE
);

-- Notifications log
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    notification_type VARCHAR(50) NOT NULL,
    related_entity_type VARCHAR(50),
    related_entity_id UUID,
    delivery_channels JSONB, -- push, sms, email, whatsapp
    sent_at TIMESTAMP WITH TIME ZONE,
    read_at TIMESTAMP WITH TIME ZONE,
    clicked_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Analytics events for recommendation system
CREATE TABLE analytics_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    session_id VARCHAR(255),
    event_type VARCHAR(100) NOT NULL, -- page_view, event_view, search, etc.
    event_data JSONB NOT NULL,
    user_agent TEXT,
    ip_address INET,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 4.2 Indexes for Performance

```sql
-- User indexes
CREATE INDEX idx_users_phone ON users(phone_number);
CREATE INDEX idx_users_city ON users(city);
CREATE INDEX idx_users_active ON users(is_active, last_active_at);

-- Event indexes
CREATE INDEX idx_events_datetime ON events(start_datetime);
CREATE INDEX idx_events_venue ON events(venue_id);
CREATE INDEX idx_events_status ON events(status, is_active);
CREATE INDEX idx_events_featured ON events(featured, start_datetime);
CREATE INDEX idx_events_genres ON events USING GIN(genres);
CREATE INDEX idx_events_location ON events(venue_id) INCLUDE (start_datetime);

-- Venue indexes
CREATE INDEX idx_venues_location ON venues(city, state);
CREATE INDEX idx_venues_coordinates ON venues(latitude, longitude);
CREATE INDEX idx_venues_active ON venues(is_active);

-- Order indexes
CREATE INDEX idx_orders_user ON orders(user_id, created_at DESC);
CREATE INDEX idx_orders_event ON orders(event_id);
CREATE INDEX idx_orders_status ON orders(payment_status);
CREATE INDEX idx_orders_reservation ON orders(booking_type, reservation_expires_at);

-- Ticket indexes
CREATE INDEX idx_tickets_order ON tickets(order_id);
CREATE INDEX idx_tickets_qr ON tickets(qr_code_data);
CREATE INDEX idx_tickets_status ON tickets(status);

-- Follow indexes
CREATE INDEX idx_follows_user ON follows(user_id);
CREATE INDEX idx_follows_followable ON follows(followable_type, followable_id);

-- Analytics indexes
CREATE INDEX idx_analytics_user_time ON analytics_events(user_id, created_at);
CREATE INDEX idx_analytics_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_session ON analytics_events(session_id);
```

---

# 5. BACKEND ARCHITECTURE & API DESIGN

## 5.1 Technology Stack Selection

### Core Backend Stack:
- **Runtime**: Node.js 20+ with TypeScript
- **Framework**: NestJS (enterprise-grade, decorator-based)
- **Database**: PostgreSQL 15+ with TimescaleDB extension for analytics
- **Cache**: Redis 7+ for session management and caching
- **Message Queue**: Redis Bull for background jobs
- **Search**: Elasticsearch for event search and recommendations
- **File Storage**: AWS S3 with CloudFront CDN
- **Payment**: Razorpay (primary), Stripe (backup)

### Architecture Pattern:
- **Modular Monolith** initially (faster development, easier deployment)
- **Microservices Migration Path** planned for scale (event service, user service, payment service)

## 5.2 Service Architecture

```typescript
// Core service structure
src/
├── modules/
│   ├── auth/                 # Authentication & authorization
│   ├── users/               # User management
│   ├── events/              # Event CRUD and search
│   ├── venues/              # Venue management
│   ├── tickets/             # Ticket generation and validation
│   ├── payments/            # Payment processing
│   ├── notifications/       # Push, SMS, email notifications
│   ├── recommendations/     # ML-based recommendations
│   ├── analytics/           # Event tracking and insights
│   ├── social/              # Follow system and social features
│   └── organizer/           # Organizer dashboard and tools
├── common/
│   ├── decorators/          # Custom decorators
│   ├── filters/             # Exception filters
│   ├── guards/              # Auth guards
│   ├── interceptors/        # Request/response interceptors
│   ├── pipes/               # Validation pipes
│   └── utils/               # Utility functions
├── config/                  # Configuration management
├── database/                # Database migrations and seeds
└── main.ts                  # Application bootstrap
```

## 5.3 API Gateway & Middleware Stack

```typescript
// API Gateway configuration
@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 100, // 100 requests per minute per IP
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
})
export class AppModule {}

// Global middleware stack
app.use(helmet()); // Security headers
app.use(compression()); // Response compression
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(','),
  credentials: true,
}));
app.useGlobalPipes(new ValidationPipe({
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
}));
app.useGlobalInterceptors(new LoggingInterceptor());
app.useGlobalFilters(new AllExceptionsFilter());
```

## 5.4 Complete API Documentation

### Authentication Endpoints

```typescript
// POST /api/auth/send-otp
interface SendOTPRequest {
  phoneNumber: string; // +91XXXXXXXXXX format
}

interface SendOTPResponse {
  success: boolean;
  message: string;
  otpId: string; // For verification
}

// POST /api/auth/verify-otp
interface VerifyOTPRequest {
  otpId: string;
  otp: string;
  deviceInfo?: {
    deviceId: string;
    platform: 'ios' | 'android' | 'web';
    appVersion: string;
  };
}

interface VerifyOTPResponse {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user: UserProfile;
  isNewUser: boolean;
}

// POST /api/auth/refresh
interface RefreshTokenRequest {
  refreshToken: string;
}

interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}
```

### Event Discovery Endpoints

```typescript
// GET /api/events/feed
interface EventFeedQuery {
  page?: number;
  limit?: number;
  city?: string;
  genres?: string[]; // Array of genre IDs
  dateFrom?: string; // ISO date
  dateTo?: string;
  priceMin?: number;
  priceMax?: number;
  sortBy?: 'recommended' | 'date' | 'price' | 'popularity';
  lat?: number;
  lng?: number;
  radius?: number; // km
}

interface EventFeedResponse {
  events: EventCard[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    hasNext: boolean;
  };
  filters: {
    availableGenres: Genre[];
    priceRange: { min: number; max: number };
    dateRange: { min: string; max: string };
  };
}

interface EventCard {
  id: string;
  title: string;
  slug: string;
  venue: {
    id: string;
    name: string;
    city: string;
  };
  startDateTime: string;
  endDateTime?: string;
  genres: Genre[];
  images: string[];
  ticketPriceRange: {
    min: number;
    max: number;
  };
  socialProof: {
    friendsInterested: number;
    friendsGoing: number;
    totalInterested: number;
  };
  rating: number;
  reviewCount: number;
  isFollowed: boolean;
  isFeatured: boolean;
}

// GET /api/events/:id
interface EventDetailResponse {
  id: string;
  title: string;
  description: string;
  venue: VenueDetail;
  promoter: PromoterDetail;
  startDateTime: string;
  endDateTime?: string;
  doorsOpenTime?: string;
  genres: Genre[];
  lineup: Artist[];
  images: string[];
  ticketTiers: TicketTier[];
  socialProof: {
    friendsInterested: User[];
    friendsGoing: User[];
    totalInterested: number;
    totalGoing: number;
  };
  reviews: Review[];
  rating: number;
  reviewCount: number;
  ageRestriction: number;
  dressCode?: string;
  amenities: string[];
  isFollowed: boolean;
  userInteraction?: {
    isInterested: boolean;
    isGoing: boolean;
    hasReviewed: boolean;
  };
}

// POST /api/events/search
interface EventSearchRequest {
  query: string;
  filters?: EventFeedQuery;
  searchType?: 'events' | 'venues' | 'artists' | 'all';
}

interface EventSearchResponse {
  results: {
    events: EventCard[];
    venues: VenueCard[];
    artists: ArtistCard[];
  };
  suggestions: string[];
  totalResults: number;
}
```

### Ticket Booking Endpoints

```typescript
// POST /api/tickets/book
interface BookTicketRequest {
  eventId: string;
  tickets: {
    tierId: string;
    quantity: number;
    holderInfo?: {
      name: string;
      email: string;
      phone: string;
    }[];
  }[];
  bookingType: 'instant' | 'reservation';
  promoCode?: string;
  paymentMethod?: 'upi' | 'card' | 'wallet';
}

interface BookTicketResponse {
  orderId: string;
  orderNumber: string;
  totalAmount: number;
  discountAmount: number;
  taxAmount: number;
  platformFee: number;
  paymentRequired: boolean;
  paymentUrl?: string; // For instant booking
  reservationExpiresAt?: string; // For reservations
  tickets: TicketDetail[];
}

// GET /api/tickets/my-tickets
interface MyTicketsResponse {
  upcoming: TicketDetail[];
  past: TicketDetail[];
  cancelled: TicketDetail[];
}

interface TicketDetail {
  id: string;
  ticketNumber: string;
  event: EventCard;
  tier: {
    name: string;
    price: number;
    benefits: string[];
  };
  qrCode: string; // Base64 encoded QR
  status: 'valid' | 'used' | 'cancelled' | 'transferred';
  holderName: string;
  usedAt?: string;
  canTransfer: boolean;
  canRefund: boolean;
}

// POST /api/tickets/:id/transfer
interface TransferTicketRequest {
  recipientPhone: string;
  recipientName: string;
}

// POST /api/tickets/validate
interface ValidateTicketRequest {
  qrCodeData: string;
  eventId: string;
  validatorId: string; // Staff member ID
}

interface ValidateTicketResponse {
  valid: boolean;
  ticket?: TicketDetail;
  error?: string;
  alreadyUsed?: boolean;
  usedAt?: string;
}
```

### Social & Follow Endpoints

```typescript
// POST /api/social/follow
interface FollowRequest {
  type: 'venue' | 'artist' | 'promoter';
  id: string;
  notificationsEnabled?: boolean;
}

// GET /api/social/following
interface FollowingResponse {
  venues: VenueCard[];
  artists: ArtistCard[];
  promoters: PromoterCard[];
}

// POST /api/social/interest
interface EventInterestRequest {
  eventId: string;
  type: 'interested' | 'going' | 'not_interested';
}

// GET /api/social/friends/activity
interface FriendsActivityResponse {
  activities: {
    user: User;
    type: 'interested' | 'going' | 'reviewed';
    event: EventCard;
    timestamp: string;
  }[];
}
```

### Organizer Dashboard Endpoints

```typescript
// POST /api/organizer/events
interface CreateEventRequest {
  title: string;
  description: string;
  venueId: string;
  startDateTime: string;
  endDateTime?: string;
  genres: string[];
  lineup: {
    artistId?: string;
    artistName: string;
    setTime?: string;
    isHeadliner: boolean;
  }[];
  ticketTiers: {
    name: string;
    description?: string;
    price: number;
    capacity: number;
    saleStartDateTime?: string;
    saleEndDateTime?: string;
    benefits?: string[];
  }[];
  images: string[];
  ageRestriction?: number;
  dressCode?: string;
}

// GET /api/organizer/events/:id/analytics
interface EventAnalyticsResponse {
  sales: {
    totalTicketsSold: number;
    totalRevenue: number;
    conversionRate: number;
    salesByTier: {
      tierName: string;
      sold: number;
      capacity: number;
      revenue: number;
    }[];
    salesOverTime: {
      date: string;
      tickets: number;
      revenue: number;
    }[];
  };
  audience: {
    demographics: {
      ageGroups: { range: string; count: number }[];
      genderSplit: { gender: string; count: number }[];
      cities: { city: string; count: number }[];
    };
    socialEngagement: {
      shares: number;
      interests: number;
      reviews: number;
      averageRating: number;
    };
  };
  marketing: {
    trafficSources: { source: string; visitors: number }[];
    conversionFunnel: {
      views: number;
      interests: number;
      checkouts: number;
      purchases: number;
    };
  };
}
```

## 5.5 Caching Strategy

```typescript
// Redis caching implementation
@Injectable()
export class CacheService {
  constructor(
    @InjectRedis() private readonly redis: Redis,
  ) {}

  // Event feed caching (5 minutes)
  async getEventFeed(cacheKey: string): Promise<EventCard[] | null> {
    const cached = await this.redis.get(`feed:${cacheKey}`);
    return cached ? JSON.parse(cached) : null;
  }

  async setEventFeed(cacheKey: string, events: EventCard[]): Promise<void> {
    await this.redis.setex(`feed:${cacheKey}`, 300, JSON.stringify(events));
  }

  // User session caching (7 days)
  async getUserSession(userId: string): Promise<UserSession | null> {
    const cached = await this.redis.get(`session:${userId}`);
    return cached ? JSON.parse(cached) : null;
  }

  // Event detail caching (1 hour)
  async getEventDetail(eventId: string): Promise<EventDetailResponse | null> {
    const cached = await this.redis.get(`event:${eventId}`);
    return cached ? JSON.parse(cached) : null;
  }

  // Invalidate event cache on updates
  async invalidateEventCache(eventId: string): Promise<void> {
    const pattern = `*${eventId}*`;
    const keys = await this.redis.keys(pattern);
    if (keys.length > 0) {
      await this.redis.del(...keys);
    }
  }
}
```

## 5.6 Security Implementation

```typescript
// JWT Authentication Guard
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    
    // Skip auth for public endpoints
    if (this.isPublicEndpoint(request.route.path)) {
      return true;
    }
    
    return super.canActivate(context);
  }

  private isPublicEndpoint(path: string): boolean {
    const publicPaths = [
      '/api/events/feed',
      '/api/events/search',
      '/api/venues',
      '/api/auth/send-otp',
      '/api/auth/verify-otp',
    ];
    return publicPaths.some(publicPath => path.startsWith(publicPath));
  }
}

// Rate limiting by user
@Injectable()
export class UserRateLimitGuard implements CanActivate {
  constructor(private readonly redis: Redis) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId = request.user?.id;
    
    if (!userId) return true; // Skip for unauthenticated requests
    
    const key = `rate_limit:${userId}`;
    const current = await this.redis.incr(key);
    
    if (current === 1) {
      await this.redis.expire(key, 60); // 1 minute window
    }
    
    return current <= 1000; // 1000 requests per minute per user
  }
}

// QR Code Security
@Injectable()
export class QRCodeService {
  private readonly secret = process.env.QR_SECRET;

  generateQRData(ticketId: string, eventId: string, userId: string): string {
    const payload = {
      ticketId,
      eventId,
      userId,
      timestamp: Date.now(),
    };
    
    const signature = crypto
      .createHmac('sha256', this.secret)
      .update(JSON.stringify(payload))
      .digest('hex');
    
    return Buffer.from(JSON.stringify({ ...payload, signature })).toString('base64');
  }

  validateQRData(qrData: string): { valid: boolean; payload?: any } {
    try {
      const decoded = JSON.parse(Buffer.from(qrData, 'base64').toString());
      const { signature, ...payload } = decoded;
      
      const expectedSignature = crypto
        .createHmac('sha256', this.secret)
        .update(JSON.stringify(payload))
        .digest('hex');
      
      if (signature !== expectedSignature) {
        return { valid: false };
      }
      
      // Check timestamp (valid for 24 hours)
      const age = Date.now() - payload.timestamp;
      if (age > 24 * 60 * 60 * 1000) {
        return { valid: false };
      }
      
      return { valid: true, payload };
    } catch (error) {
      return { valid: false };
    }
  }
}
```

---

# 6. RECOMMENDATION SYSTEM DESIGN

## 6.1 Stage 1: Rule-Based + Collaborative Filtering (MVP)

### 6.1.1 Scoring Algorithm

```typescript
interface RecommendationScore {
  eventId: string;
  score: number;
  reasons: string[];
  confidence: number;
}

@Injectable()
export class RecommendationEngine {
  async calculateEventScore(userId: string, eventId: string): Promise<RecommendationScore> {
    const user = await this.getUserProfile(userId);
    const event = await this.getEventDetail(eventId);
    
    let score = 0;
    const reasons: string[] = [];
    
    // 1. Genre Preference Match (30% weight)
    const genreScore = this.calculateGenreScore(user.musicPreferences, event.genres);
    score += genreScore * 0.3;
    if (genreScore > 0.7) reasons.push('Matches your music taste');
    
    // 2. Location Proximity (25% weight)
    const locationScore = this.calculateLocationScore(user.city, event.venue.city);
    score += locationScore * 0.25;
    if (locationScore > 0.8) reasons.push('Near your location');
    
    // 3. Social Proof (20% weight)
    const socialScore = await this.calculateSocialScore(userId, eventId);
    score += socialScore * 0.2;
    if (socialScore > 0.5) reasons.push('Friends are interested');
    
    // 4. Time Preference (15% weight)
    const timeScore = this.calculateTimeScore(user.activityPatterns, event.startDateTime);
    score += timeScore * 0.15;
    
    // 5. Price Preference (10% weight)
    const priceScore = this.calculatePriceScore(user.spendingPattern, event.ticketPriceRange);
    score += priceScore * 0.1;
    if (priceScore > 0.8) reasons.push('Within your budget');
    
    // Boost factors
    if (user.followedVenues.includes(event.venue.id)) {
      score += 0.2;
      reasons.push('From a venue you follow');
    }
    
    if (event.lineup.some(artist => user.followedArtists.includes(artist.id))) {
      score += 0.25;
      reasons.push('Features artists you follow');
    }
    
    // Recency boost for new events
    const eventAge = Date.now() - new Date(event.createdAt).getTime();
    if (eventAge < 24 * 60 * 60 * 1000) { // Less than 24 hours old
      score += 0.1;
    }
    
    return {
      eventId,
      score: Math.min(score, 1), // Cap at 1.0
      reasons,
      confidence: this.calculateConfidence(user, event),
    };
  }

  private calculateGenreScore(userPreferences: any, eventGenres: Genre[]): number {
    if (!userPreferences?.genres) return 0.5; // Default for new users
    
    const userGenres = userPreferences.genres;
    const matchingGenres = eventGenres.filter(genre => 
      userGenres.includes(genre.id) || 
      userGenres.includes(genre.parentId)
    );
    
    return matchingGenres.length / Math.max(eventGenres.length, 1);
  }

  private async calculateSocialScore(userId: string, eventId: string): Promise<number> {
    const friendsInterested = await this.getFriendsInterestedInEvent(userId, eventId);
    const totalFriends = await this.getUserFriendsCount(userId);
    
    if (totalFriends === 0) return 0;
    
    return Math.min(friendsInterested / totalFriends, 1);
  }

  private calculateLocationScore(userCity: string, eventCity: string): number {
    if (userCity === eventCity) return 1.0;
    
    // Calculate distance between cities (simplified)
    const distance = this.getCityDistance(userCity, eventCity);
    if (distance < 50) return 0.8;
    if (distance < 100) return 0.6;
    if (distance < 200) return 0.4;
    return 0.2;
  }
}
```

### 6.1.2 Real-Time Recommendation Pipeline

```typescript
@Injectable()
export class RecommendationService {
  constructor(
    private readonly recommendationEngine: RecommendationEngine,
    private readonly cacheService: CacheService,
    private readonly analyticsService: AnalyticsService,
  ) {}

  async getPersonalizedFeed(userId: string, options: FeedOptions): Promise<EventCard[]> {
    const cacheKey = `recommendations:${userId}:${JSON.stringify(options)}`;
    
    // Check cache first
    let recommendations = await this.cacheService.get(cacheKey);
    if (recommendations) {
      await this.trackRecommendationServed(userId, recommendations, 'cache');
      return recommendations;
    }
    
    // Generate fresh recommendations
    const candidateEvents = await this.getCandidateEvents(userId, options);
    const scoredEvents = await Promise.all(
      candidateEvents.map(event => 
        this.recommendationEngine.calculateEventScore(userId, event.id)
      )
    );
    
    // Sort by score and apply diversity
    const rankedEvents = this.applyDiversityFilters(scoredEvents);
    recommendations = rankedEvents.slice(0, options.limit || 20);
    
    // Cache for 10 minutes
    await this.cacheService.set(cacheKey, recommendations, 600);
    
    // Track recommendation serving
    await this.trackRecommendationServed(userId, recommendations, 'fresh');
    
    return recommendations;
  }

  private applyDiversityFilters(scoredEvents: RecommendationScore[]): EventCard[] {
    const sorted = scoredEvents.sort((a, b) => b.score - a.score);
    const diversified: EventCard[] = [];
    const seenVenues = new Set<string>();
    const seenGenres = new Set<string>();
    
    for (const scored of sorted) {
      const event = this.getEventById(scored.eventId);
      
      // Ensure venue diversity (max 2 events per venue in top 10)
      if (diversified.length < 10 && seenVenues.has(event.venue.id)) {
        const venueCount = diversified.filter(e => e.venue.id === event.venue.id).length;
        if (venueCount >= 2) continue;
      }
      
      // Ensure genre diversity
      const eventGenres = event.genres.map(g => g.id);
      const hasNewGenre = eventGenres.some(g => !seenGenres.has(g));
      
      if (diversified.length < 5 || hasNewGenre || scored.score > 0.8) {
        diversified.push(event);
        seenVenues.add(event.venue.id);
        eventGenres.forEach(g => seenGenres.add(g));
      }
      
      if (diversified.length >= 50) break; // Limit total results
    }
    
    return diversified;
  }

  private async trackRecommendationServed(
    userId: string, 
    recommendations: EventCard[], 
    source: string
  ): Promise<void> {
    await this.analyticsService.track({
      userId,
      eventType: 'recommendation_served',
      eventData: {
        source,
        count: recommendations.length,
        eventIds: recommendations.map(r => r.id),
        timestamp: new Date().toISOString(),
      },
    });
  }
}
```

## 6.2 Stage 2: Advanced ML Pipeline (Future)

### 6.2.1 Feature Engineering

```python
# Feature extraction for ML model (Python/scikit-learn)
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import StandardScaler

class EventFeatureExtractor:
    def __init__(self):
        self.genre_encoder = None
        self.venue_encoder = None
        self.text_vectorizer = TfidfVectorizer(max_features=1000)
        self.scaler = StandardScaler()
    
    def extract_user_features(self, user_data):
        """Extract user preference features"""
        features = {
            'age': user_data.get('age', 25),
            'city_encoded': self.encode_city(user_data.get('city')),
            'genre_preferences': self.encode_genres(user_data.get('music_preferences', {})),
            'avg_ticket_price': user_data.get('avg_spending', 800),
            'events_attended_last_month': user_data.get('recent_activity', 0),
            'social_activity_score': self.calculate_social_score(user_data),
            'time_preferences': self.encode_time_preferences(user_data),
        }
        return features
    
    def extract_event_features(self, event_data):
        """Extract event characteristics"""
        features = {
            'venue_popularity': event_data.get('venue_rating', 0),
            'price_tier': self.categorize_price(event_data.get('min_price', 0)),
            'genre_vector': self.encode_genres(event_data.get('genres', [])),
            'lineup_popularity': self.calculate_lineup_score(event_data.get('lineup', [])),
            'event_duration': self.calculate_duration(event_data),
            'day_of_week': self.encode_day_of_week(event_data.get('start_datetime')),
            'time_of_day': self.encode_time_of_day(event_data.get('start_datetime')),
            'description_features': self.text_vectorizer.transform([event_data.get('description', '')]),
        }
        return features
    
    def create_interaction_features(self, user_features, event_features):
        """Create user-event interaction features"""
        interactions = {
            'genre_match_score': np.dot(user_features['genre_preferences'], 
                                      event_features['genre_vector']),
            'price_preference_match': self.calculate_price_match(
                user_features['avg_ticket_price'], 
                event_features['price_tier']
            ),
            'time_preference_match': self.calculate_time_match(
                user_features['time_preferences'],
                event_features['time_of_day']
            ),
        }
        return interactions

# Model training pipeline
class RecommendationModel:
    def __init__(self):
        self.model = None
        self.feature_extractor = EventFeatureExtractor()
    
    def train(self, training_data):
        """Train the recommendation model"""
        from sklearn.ensemble import GradientBoostingRegressor
        from sklearn.model_selection import train_test_split
        
        # Prepare features and targets
        X, y = self.prepare_training_data(training_data)
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
        
        # Train model
        self.model = GradientBoostingRegressor(
            n_estimators=100,
            learning_rate=0.1,
            max_depth=6,
            random_state=42
        )
        self.model.fit(X_train, y_train)
        
        # Evaluate
        train_score = self.model.score(X_train, y_train)
        test_score = self.model.score(X_test, y_test)
        
        return {
            'train_score': train_score,
            'test_score': test_score,
            'feature_importance': self.model.feature_importances_
        }
    
    def predict(self, user_id, event_ids):
        """Predict user interest scores for events"""
        user_data = self.get_user_data(user_id)
        event_data = self.get_events_data(event_ids)
        
        predictions = []
        for event in event_data:
            features = self.create_feature_vector(user_data, event)
            score = self.model.predict([features])[0]
            predictions.append({
                'event_id': event['id'],
                'score': score,
                'confidence': self.calculate_prediction_confidence(features)
            })
        
        return sorted(predictions, key=lambda x: x['score'], reverse=True)
```

---

# 7. FRONTEND ENGINEERING PLAN

## 7.1 Technology Stack & Architecture

### Core Stack:
- **Framework**: React Native 0.72+ with TypeScript
- **Navigation**: React Navigation 6
- **State Management**: Redux Toolkit + RTK Query
- **UI Components**: Custom component library with react-native-reanimated
- **Styling**: Styled Components with theme provider
- **Maps**: React Native Maps (Google Maps)
- **Payments**: Razorpay React Native SDK
- **Push Notifications**: React Native Firebase
- **Analytics**: React Native Firebase Analytics
- **Crash Reporting**: React Native Firebase Crashlytics

### Project Structure:
```
src/
├── components/           # Reusable UI components
│   ├── common/          # Generic components (Button, Input, etc.)
│   ├── event/           # Event-specific components
│   ├── ticket/          # Ticket-related components
│   └── social/          # Social feature components
├── screens/             # Screen components
│   ├── auth/           # Authentication screens
│   ├── home/           # Home feed and discovery
│   ├── event/          # Event detail and booking
│   ├── ticket/         # Ticket management
│   ├── profile/        # User profile and settings
│   └── organizer/      # Organizer dashboard
├── navigation/          # Navigation configuration
├── store/              # Redux store and slices
├── services/           # API services and utilities
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── constants/          # App constants and config
└── assets/             # Images, fonts, etc.
```

## 7.2 Component Library Implementation

### Theme Provider:
```typescript
// theme/index.ts
export const theme = {
  colors: {
    primary: '#8B5CF6',
    secondary: '#06B6D4',
    accent: '#F59E0B',
    background: {
      primary: '#0A0A0A',
      secondary: '#1A1A1A',
      tertiary: '#2A2A2A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#D1D5DB',
      tertiary: '#9CA3AF',
      muted: '#6B7280',
    },
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
  },
  typography: {
    fontFamily: 'Inter',
    sizes: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
    },
    weights: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      black: '900',
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    '3xl': 32,
    '4xl': 40,
    '5xl': 48,
    '6xl': 64,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 24,
    full: 9999,
  },
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
  },
};
```

### Core Components:

```typescript
// components/common/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

const StyledButton = styled(TouchableOpacity)<{
  variant: string;
  size: string;
  fullWidth: boolean;
  disabled: boolean;
}>`
  background-color: ${({ variant, disabled }) => {
    if (disabled) return theme.colors.background.tertiary;
    switch (variant) {
      case 'primary': return theme.colors.primary;
      case 'secondary': return theme.colors.secondary;
      case 'outline': return 'transparent';
      case 'ghost': return 'transparent';
      default: return theme.colors.primary;
    }
  }};
  border: ${({ variant }) => 
    variant === 'outline' ? `1px solid ${theme.colors.primary}` : 'none'
  };
  border-radius: ${theme.borderRadius.lg}px;
  padding: ${({ size }) => {
    switch (size) {
      case 'sm': return '8px 16px';
      case 'md': return '12px 24px';
      case 'lg': return '16px 32px';
      default: return '12px 24px';
    }
  }};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
`;

const ButtonText = styled(Text)<{ variant: string; size: string }>`
  color: ${({ variant }) => {
    switch (variant) {
      case 'outline': return theme.colors.primary;
      case 'ghost': return theme.colors.text.primary;
      default: return theme.colors.text.primary;
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case 'sm': return theme.typography.sizes.sm;
      case 'md': return theme.typography.sizes.base;
      case 'lg': return theme.typography.sizes.lg;
      default: return theme.typography.sizes.base;
    }
  }}px;
  font-weight: ${theme.typography.weights.semibold};
  font-family: ${theme.typography.fontFamily};
`;

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.text.primary} />
      ) : (
        <ButtonText variant={variant} size={size}>
          {title}
        </ButtonText>
      )}
    </StyledButton>
  );
};
```

```typescript
// components/event/EventCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../theme';
import { EventCard as EventCardType } from '../../types/event';

interface EventCardProps {
  event: EventCardType;
  onPress: () => void;
  onShare?: () => void;
  onInterest?: () => void;
}

const CardContainer = styled(TouchableOpacity)`
  background-color: ${theme.colors.background.secondary};
  border-radius: ${theme.borderRadius.xl}px;
  margin: ${theme.spacing.md}px;
  overflow: hidden;
  ${theme.shadows.md}
`;

const ImageContainer = styled(View)`
  height: 200px;
  position: relative;
`;

const EventImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const ImageOverlay = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: space-between;
  padding: ${theme.spacing.lg}px;
`;

const TagsContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

const GenreTag = styled(View)`
  background-color: ${theme.colors.primary};
  padding: ${theme.spacing.xs}px ${theme.spacing.sm}px;
  border-radius: ${theme.borderRadius.full}px;
`;

const PriceTag = styled(View)`
  background-color: ${theme.colors.accent};
  padding: ${theme.spacing.xs}px ${theme.spacing.sm}px;
  border-radius: ${theme.borderRadius.full}px;
`;

const TagText = styled(Text)`
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.sizes.xs}px;
  font-weight: ${theme.typography.weights.bold};
  font-family: ${theme.typography.fontFamily};
`;

const ContentContainer = styled(View)`
  padding: ${theme.spacing.lg}px;
`;

const EventTitle = styled(Text)`
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.sizes.xl}px;
  font-weight: ${theme.typography.weights.bold};
  font-family: ${theme.typography.fontFamily};
  margin-bottom: ${theme.spacing.xs}px;
`;

const VenueName = styled(Text)`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.sizes.base}px;
  font-weight: ${theme.typography.weights.medium};
  font-family: ${theme.typography.fontFamily};
  margin-bottom: ${theme.spacing.xs}px;
`;

const DateTime = styled(Text)`
  color: ${theme.colors.secondary};
  font-size: ${theme.typography.sizes.sm}px;
  font-weight: ${theme.typography.weights.medium};
  font-family: ${theme.typography.fontFamily};
  margin-bottom: ${theme.spacing.md}px;
`;

const SocialProof = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${theme.spacing.md}px;
`;

const SocialText = styled(Text)`
  color: ${theme.colors.text.tertiary};
  font-size: ${theme.typography.sizes.sm}px;
  font-family: ${theme.typography.fontFamily};
  margin-left: ${theme.spacing.xs}px;
`;

const ActionButtons = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const EventCard: React.FC<EventCardProps> = ({
  event,
  onPress,
  onShare,
  onInterest,
}) => {
  const formatDateTime = (dateTime: string) => {
    const date = new Date(dateTime);
    return date.toLocaleDateString('en-IN', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <CardContainer onPress={onPress} activeOpacity={0.9}>
      <ImageContainer>
        <EventImage source={{ uri: event.images[0] }} />
        <ImageOverlay
          colors={['transparent', 'rgba(0,0,0,0.7)']}
          locations={[0.3, 1]}
        >
          <TagsContainer>
            <GenreTag>
              <TagText>{event.genres[0]?.name.toUpperCase()}</TagText>
            </GenreTag>
            <PriceTag>
              <TagText>₹{event.ticketPriceRange.min}</TagText>
            </PriceTag>
          </TagsContainer>
          <View />
        </ImageOverlay>
      </ImageContainer>
      
      <ContentContainer>
        <EventTitle numberOfLines={2}>{event.title}</EventTitle>
        <VenueName>{event.venue.name}</VenueName>
        <DateTime>{formatDateTime(event.startDateTime)}</DateTime>
        
        {event.socialProof.friendsInterested > 0 && (
          <SocialProof>
            <Text>👥</Text>
            <SocialText>
              {event.socialProof.friendsInterested} friends interested
            </SocialText>
          </SocialProof>
        )}
        
        <ActionButtons>
          <Button
            title="Book Now"
            onPress={onPress}
            size="sm"
            style={{ flex: 1, marginRight: theme.spacing.sm }}
          />
          <TouchableOpacity onPress={onShare}>
            <Text style={{ fontSize: 24 }}>📤</Text>
          </TouchableOpacity>
        </ActionButtons>
      </ContentContainer>
    </CardContainer>
  );
};
```

## 7.3 State Management with Redux Toolkit

```typescript
// store/slices/eventSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { eventAPI } from '../../services/api';
import { EventCard, EventDetail } from '../../types/event';

interface EventState {
  feed: {
    events: EventCard[];
    loading: boolean;
    error: string | null;
    hasMore: boolean;
    page: number;
  };
  eventDetail: {
    [eventId: string]: {
      data: EventDetail | null;
      loading: boolean;
      error: string | null;
    };
  };
  filters: {
    city: string;
    genres: string[];
    dateRange: { start: string; end: string } | null;
    priceRange: { min: number; max: number } | null;
  };
}

// Async thunks
export const fetchEventFeed = createAsyncThunk(
  'events/fetchFeed',
  async (params: { page?: number; refresh?: boolean }) => {
    const response = await eventAPI.getFeed({
      page: params.page || 1,
      limit: 20,
    });
    return { ...response, refresh: params.refresh };
  }
);

export const fetchEventDetail = createAsyncThunk(
  'events/fetchDetail',
  async (eventId: string) => {
    const response = await eventAPI.getEventDetail(eventId);
    return { eventId, data: response };
  }
);

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    feed: {
      events: [],
      loading: false,
      error: null,
      hasMore: true,
      page: 1,
    },
    eventDetail: {},
    filters: {
      city: '',
      genres: [],
      dateRange: null,
      priceRange: null,
    },
  } as EventState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearEventDetail: (state, action) => {
      delete state.eventDetail[action.payload];
    },
    updateEventInterest: (state, action) => {
      const { eventId, isInterested } = action.payload;
      
      // Update in feed
      const feedEvent = state.feed.events.find(e => e.id === eventId);
      if (feedEvent) {
        feedEvent.socialProof.totalInterested += isInterested ? 1 : -1;
      }
      
      // Update in detail
      const detailEvent = state.eventDetail[eventId];
      if (detailEvent?.data) {
        detailEvent.data.socialProof.totalInterested += isInterested ? 1 : -1;
        detailEvent.data.userInteraction = {
          ...detailEvent.data.userInteraction,
          isInterested,
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch feed
      .addCase(fetchEventFeed.pending, (state, action) => {
        state.feed.loading = true;
        if (action.meta.arg.refresh) {
          state.feed.events = [];
          state.feed.page = 1;
        }
      })
      .addCase(fetchEventFeed.fulfilled, (state, action) => {
        state.feed.loading = false;
        state.feed.error = null;
        
        if (action.payload.refresh) {
          state.feed.events = action.payload.events;
        } else {
          state.feed.events.push(...action.payload.events);
        }
        
        state.feed.hasMore = action.payload.pagination.hasNext;
        state.feed.page = action.payload.pagination.page;
      })
      .addCase(fetchEventFeed.rejected, (state, action) => {
        state.feed.loading = false;
        state.feed.error = action.error.message || 'Failed to fetch events';
      })
      
      // Fetch event detail
      .addCase(fetchEventDetail.pending, (state, action) => {
        const eventId = action.meta.arg;
        state.eventDetail[eventId] = {
          data: null,
          loading: true,
          error: null,
        };
      })
      .addCase(fetchEventDetail.fulfilled, (state, action) => {
        const { eventId, data } = action.payload;
        state.eventDetail[eventId] = {
          data,
          loading: false,
          error: null,
        };
      })
      .addCase(fetchEventDetail.rejected, (state, action) => {
        const eventId = action.meta.arg;
        state.eventDetail[eventId] = {
          data: null,
          loading: false,
          error: action.error.message || 'Failed to fetch event detail',
        };
      });
  },
});

export const { setFilters, clearEventDetail, updateEventInterest } = eventSlice.actions;
export default eventSlice.reducer;
```

## 7.4 Sample Screen Implementation

```typescript
// screens/home/HomeFeedScreen.tsx
import React, { useEffect, useCallback } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

import { EventCard } from '../../components/event/EventCard';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { EmptyState } from '../../components/common/EmptyState';
import { fetchEventFeed, updateEventInterest } from '../../store/slices/eventSlice';
import { shareEvent, markEventInterest } from '../../services/eventService';
import { theme } from '../../theme';
import { RootState, AppDispatch } from '../../store';

const Container = styled(View)`
  flex: 1;
  background-color: ${theme.colors.background.primary};
`;

const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.lg}px;
  padding-top: ${theme.spacing['2xl']}px;
`;

const LocationText = styled(Text)`
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.sizes.lg}px;
  font-weight: ${theme.typography.weights.semibold};
  font-family: ${theme.typography.fontFamily};
`;

const NotificationBadge = styled(TouchableOpacity)`
  position: relative;
`;

export const HomeFeedScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  
  const { events, loading, error, hasMore } = useSelector(
    (state: RootState) => state.events.feed
  );
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(fetchEventFeed({ refresh: true }));
  }, [dispatch]);

  const handleRefresh = useCallback(() => {
    dispatch(fetchEventFeed({ refresh: true }));
  }, [dispatch]);

  const handleLoadMore = useCallback(() => {
    if (!loading && hasMore) {
      dispatch(fetchEventFeed({ page: Math.floor(events.length / 20) + 1 }));
    }
  }, [dispatch, loading, hasMore, events.length]);

  const handleEventPress = useCallback((eventId: string) => {
    navigation.navigate('EventDetail', { eventId });
  }, [navigation]);

  const handleEventShare = useCallback(async (event: EventCard) => {
    try {
      await shareEvent(event);
    } catch (error) {
      console.error('Failed to share event:', error);
    }
  }, []);

  const handleEventInterest = useCallback(async (eventId: string) => {
    try {
      const result = await markEventInterest(eventId, 'interested');
      dispatch(updateEventInterest({
        eventId,
        isInterested: result.isInterested,
      }));
    } catch (error) {
      console.error('Failed to mark interest:', error);
    }
  }, [dispatch]);

  const renderEventCard = useCallback(({ item }: { item: EventCard }) => (
    <EventCard
      event={item}
      onPress={() => handleEventPress(item.id)}
      onShare={() => handleEventShare(item)}
      onInterest={() => handleEventInterest(item.id)}
    />
  ), [handleEventPress, handleEventShare, handleEventInterest]);

  const renderFooter = useCallback(() => {
    if (!loading) return null;
    return <LoadingSpinner style={{ padding: theme.spacing.lg }} />;
  }, [loading]);

  const renderEmpty = useCallback(() => {
    if (loading) return null;
    return (
      <EmptyState
        title="No events found"
        description="Check back later for new events in your area"
        actionText="Refresh"
        onAction={handleRefresh}
      />
    );
  }, [loading, handleRefresh]);

  return (
    <Container>
      <Header>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, marginRight: 8 }}>📍</Text>
          <LocationText>{user?.city || 'Select City'}</LocationText>
        </View>
        
        <NotificationBadge onPress={() => navigation.navigate('Notifications')}>
          <Text style={{ fontSize: 24 }}>🔔</Text>
          {/* Notification badge count */}
        </NotificationBadge>
      </Header>

      <FlatList
        data={events}
        renderItem={renderEventCard}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl
            refreshing={loading && events.length === 0}
            onRefresh={handleRefresh}
            tintColor={theme.colors.primary}
          />
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: theme.spacing['2xl'],
        }}
      />
    </Container>
  );
};
```

---

# 8. ORGANIZER PORTAL & ANALYTICS DASHBOARD

## 8.1 Organizer Portal Architecture

### Web-Based Dashboard (Next.js):
```typescript
// Organizer portal structure
organizer-portal/
├── pages/
│   ├── dashboard/           # Main dashboard
│   ├── events/             # Event management
│   ├── analytics/          # Analytics and reports
│   ├── checkin/            # Event check-in portal
│   ├── settings/           # Account settings
│   └── api/                # API routes
├── components/
│   ├── dashboard/          # Dashboard components
│   ├── events/             # Event management components
│   ├── analytics/          # Analytics components
│   └── common/             # Shared components
├── hooks/                  # Custom React hooks
├── services/               # API services
├── utils/                  # Utility functions
└── types/                  # TypeScript types
```

## 8.2 Event Management Interface

```typescript
// components/events/EventCreationForm.tsx
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface EventFormData {
  title: string;
  description: string;
  venueId: string;
  startDateTime: string;
  endDateTime?: string;
  genres: string[];
  lineup: {
    artistName: string;
    setTime?: string;
    isHeadliner: boolean;
  }[];
  ticketTiers: {
    name: string;
    price: number;
    capacity: number;
    description?: string;
  }[];
  images: File[];
  ageRestriction: number;
  dressCode?: string;
}

const eventSchema = yup.object({
  title: yup.string().required('Event title is required').min(3).max(100),
  description: yup.string().required('Description is required').min(10),
  venueId: yup.string().required('Venue selection is required'),
  startDateTime: yup.string().required('Start date and time is required'),
  genres: yup.array().min(1, 'At least one genre is required'),
  ticketTiers: yup.array().min(1, 'At least one ticket tier is required'),
});

export const EventCreationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<EventFormData>({
    resolver: yupResolver(eventSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: EventFormData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      
      // Append basic event data
      Object.entries(data).forEach(([key, value]) => {
        if (key !== 'images' && key !== 'lineup' && key !== 'ticketTiers') {
          formData.append(key, typeof value === 'object' ? JSON.stringify(value) : value);
        }
      });
      
      // Append images
      data.images.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });
      
      // Append complex objects
      formData.append('lineup', JSON.stringify(data.lineup));
      formData.append('ticketTiers', JSON.stringify(data.ticketTiers));
      
      const response = await fetch('/api/organizer/events', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        const event = await response.json();
        router.push(`/dashboard/events/${event.id}`);
      }
    } catch (error) {
      console.error('Failed to create event:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfoStep control={control} errors={errors} />;
      case 2:
        return <VenueAndTimeStep control={control} errors={errors} />;
      case 3:
        return <LineupStep control={control} setValue={setValue} watch={watch} />;
      case 4:
        return <TicketingStep control={control} setValue={setValue} watch={watch} />;
      case 5:
        return <MediaStep control={control} setValue={setValue} />;
      case 6:
        return <ReviewStep data={watch()} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Create New Event</h1>
        <div className="flex items-center space-x-4">
          {[1, 2, 3, 4, 5, 6].map((step) => (
            <div
              key={step}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step <= currentStep
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-400'
              }`}
            >
              {step}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {renderStep()}
        
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          
          {currentStep < 6 ? (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              {isSubmitting ? 'Creating...' : 'Create Event'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
```

## 8.3 Real-Time Analytics Dashboard

```typescript
// components/analytics/EventAnalyticsDashboard.tsx
import React, { useState, useEffect } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface AnalyticsData {
  sales: {
    totalTicketsSold: number;
    totalRevenue: number;
    conversionRate: number;
    salesByTier: Array<{
      tierName: string;
      sold: number;
      capacity: number;
      revenue: number;
    }>;
    salesOverTime: Array<{
      date: string;
      tickets: number;
      revenue: number;
    }>;
  };
  audience: {
    demographics: {
      ageGroups: Array<{ range: string; count: number }>;
      genderSplit: Array<{ gender: string; count: number }>;
      cities: Array<{ city: string; count: number }>;
    };
    socialEngagement: {
      shares: number;
      interests: number;
      reviews: number;
      averageRating: number;
    };
  };
  marketing: {
    trafficSources: Array<{ source: string; visitors: number }>;
    conversionFunnel: {
      views: number;
      interests: number;
      checkouts: number;
      purchases: number;
    };
  };
}

export const EventAnalyticsDashboard: React.FC<{ eventId: string }> = ({ eventId }) => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7d');

  useEffect(() => {
    fetchAnalytics();
  }, [eventId, timeRange]);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch(`/api/organizer/events/${eventId}/analytics?range=${timeRange}`);
      const data = await response.json();
      setAnalytics(data);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading analytics...</div>;
  }

  if (!analytics) {
    return <div className="text-center text-gray-400">No analytics data available</div>;
  }

  const salesChartData = {
    labels: analytics.sales.salesOverTime.map(item => 
      new Date(item.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: 'Tickets Sold',
        data: analytics.sales.salesOverTime.map(item => item.tickets),
        borderColor: '#8B5CF6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Revenue (₹)',
        data: analytics.sales.salesOverTime.map(item => item.revenue),
        borderColor: '#06B6D4',
        backgroundColor: 'rgba(6, 182, 212, 0.1)',
        tension: 0.4,
        yAxisID: 'y1',
      },
    ],
  };

  const tierSalesData = {
    labels: analytics.sales.salesByTier.map(tier => tier.tierName),
    datasets: [
      {
        label: 'Tickets Sold',
        data: analytics.sales.salesByTier.map(tier => tier.sold),
        backgroundColor: ['#8B5CF6', '#06B6D4', '#F59E0B', '#10B981'],
      },
    ],
  };

  const demographicsData = {
    labels: analytics.audience.demographics.ageGroups.map(group => group.range),
    datasets: [
      {
        data: analytics.audience.demographics.ageGroups.map(group => group.count),
        backgroundColor: [
          '#8B5CF6',
          '#06B6D4',
          '#F59E0B',
          '#10B981',
          '#EF4444',
        ],
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard
          title="Total Tickets Sold"
          value={analytics.sales.totalTicketsSold.toLocaleString()}
          change="+12%"
          positive
        />
        <MetricCard
          title="Total Revenue"
          value={`₹${analytics.sales.totalRevenue.toLocaleString()}`}
          change="+8%"
          positive
        />
        <MetricCard
          title="Conversion Rate"
          value={`${analytics.sales.conversionRate.toFixed(1)}%`}
          change="+2.3%"
          positive
        />
        <MetricCard
          title="Average Rating"
          value={analytics.audience.socialEngagement.averageRating.toFixed(1)}
          change="+0.2"
          positive
        />
      </div>

      {/* Sales Over Time */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-white">Sales Performance</h3>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-gray-700 text-white rounded px-3 py-1"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
        </div>
        <div className="h-64">
          <Line
            data={salesChartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  labels: { color: '#fff' },
                },
              },
              scales: {
                x: {
                  ticks: { color: '#9CA3AF' },
                  grid: { color: '#374151' },
                },
                y: {
                  type: 'linear',
                  display: true,
                  position: 'left',
                  ticks: { color: '#9CA3AF' },
                  grid: { color: '#374151' },
                },
                y1: {
                  type: 'linear',
                  display: true,
                  position: 'right',
                  ticks: { color: '#9CA3AF' },
                  grid: { drawOnChartArea: false },
                },
              },
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ticket Tier Performance */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Ticket Tier Performance</h3>
          <div className="h-64">
            <Bar
              data={tierSalesData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                },
                scales: {
                  x: {
                    ticks: { color: '#9CA3AF' },
                    grid: { color: '#374151' },
                  },
                  y: {
                    ticks: { color: '#9CA3AF' },
                    grid: { color: '#374151' },
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Audience Demographics */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Audience Age Groups</h3>
          <div className="h-64">
            <Doughnut
              data={demographicsData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: { color: '#fff' },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Conversion Funnel */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Conversion Funnel</h3>
        <div className="space-y-4">
          <FunnelStep
            label="Event Views"
            value={analytics.marketing.conversionFunnel.views}
            percentage={100}
          />
          <FunnelStep
            label="Showed Interest"
            value={analytics.marketing.conversionFunnel.interests}
            percentage={(analytics.marketing.conversionFunnel.interests / analytics.marketing.conversionFunnel.views) * 100}
          />
          <FunnelStep
            label="Started Checkout"
            value={analytics.marketing.conversionFunnel.checkouts}
            percentage={(analytics.marketing.conversionFunnel.checkouts / analytics.marketing.conversionFunnel.views) * 100}
          />
          <FunnelStep
            label="Completed Purchase"
            value={analytics.marketing.conversionFunnel.purchases}
            percentage={(analytics.marketing.conversionFunnel.purchases / analytics.marketing.conversionFunnel.views) * 100}
          />
        </div>
      </div>
    </div>
  );
};

const MetricCard: React.FC<{
  title: string;
  value: string;
  change: string;
  positive: boolean;
}> = ({ title, value, change, positive }) => (
  <div className="bg-gray-800 rounded-lg p-6">
    <h4 className="text-sm font-medium text-gray-400 mb-2">{title}</h4>
    <div className="flex items-end justify-between">
      <span className="text-2xl font-bold text-white">{value}</span>
      <span className={`text-sm font-medium ${positive ? 'text-green-400' : 'text-red-400'}`}>
        {change}
      </span>
    </div>
  </div>
);

const FunnelStep: React.FC<{
  label: string;
  value: number;
  percentage: number;
}> = ({ label, value, percentage }) => (
  <div className="flex items-center justify-between">
    <div className="flex-1">
      <div className="flex justify-between items-center mb-1">
        <span className="text-white font-medium">{label}</span>
        <span className="text-gray-400">{value.toLocaleString()}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-purple-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
    <span className="ml-4 text-sm text-gray-400">{percentage.toFixed(1)}%</span>
  </div>
);
```

## 8.4 Check-In Portal System

```typescript
// components/checkin/CheckInPortal.tsx
import React, { useState, useEffect, useRef } from 'react';
import { QrReader } from 'react-qr-reader';
import { toast } from 'react-hot-toast';

interface CheckInPortalProps {
  eventId: string;
  staffId: string;
}

interface TicketValidationResult {
  valid: boolean;
  ticket?: {
    id: string;
    ticketNumber: string;
    holderName: string;
    tierName: string;
    alreadyUsed: boolean;
    usedAt?: string;
  };
  error?: string;
}

export const CheckInPortal: React.FC<CheckInPortalProps> = ({ eventId, staffId }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [validationResult, setValidationResult] = useState<TicketValidationResult | null>(null);
  const [stats, setStats] = useState({
    totalCheckedIn: 0,
    totalCapacity: 0,
    recentCheckIns: [] as Array<{
      ticketNumber: string;
      holderName: string;
      checkedInAt: string;
    }>,
  });
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    fetchCheckInStats();
    const interval = setInterval(fetchCheckInStats, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, [eventId]);

  const fetchCheckInStats = async () => {
    try {
      const response = await fetch(`/api/organizer/events/${eventId}/checkin-stats`);
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Failed to fetch check-in stats:', error);
    }
  };

  const validateTicket = async (qrData: string) => {
    try {
      const response = await fetch('/api/tickets/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          qrCodeData: qrData,
          eventId,
          validatorId: staffId,
        }),
      });

      const result: TicketValidationResult = await response.json();
      setValidationResult(result);

      if (result.valid && !result.ticket?.alreadyUsed) {
        // Play success sound
        if (audioRef.current) {
          audioRef.current.play();
        }
        toast.success(`Welcome ${result.ticket?.holderName}!`);
        fetchCheckInStats(); // Refresh stats
      } else if (result.ticket?.alreadyUsed) {
        toast.error('Ticket already used!');
      } else {
        toast.error(result.error || 'Invalid ticket');
      }

      // Clear result after 3 seconds
      setTimeout(() => setValidationResult(null), 3000);
    } catch (error) {
      console.error('Validation failed:', error);
      toast.error('Validation failed. Please try again.');
    }
  };

  const handleScan = (result: any) => {
    if (result) {
      validateTicket(result.text);
    }
  };

  const handleError = (error: any) => {
    console.error('QR Scanner error:', error);
    toast.error('Camera error. Please check permissions.');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Event Check-In Portal</h1>
        <div className="flex items-center space-x-6 text-gray-300">
          <span>Total Checked In: <strong className="text-green-400">{stats.totalCheckedIn}</strong></span>
          <span>Capacity: <strong>{stats.totalCapacity}</strong></span>
          <span>Occupancy: <strong>{((stats.totalCheckedIn / stats.totalCapacity) * 100).toFixed(1)}%</strong></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* QR Scanner */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">QR Code Scanner</h2>
            <button
              onClick={() => setIsScanning(!isScanning)}
              className={`px-4 py-2 rounded-lg font-medium ${
                isScanning
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {isScanning ? 'Stop Scanning' : 'Start Scanning'}
            </button>
          </div>

          {isScanning && (
            <div className="relative">
              <QrReader
                onResult={handleScan}
                onError={handleError}
                style={{ width: '100%' }}
                constraints={{ facingMode: 'environment' }}
              />
              <div className="absolute inset-0 border-2 border-purple-500 rounded-lg pointer-events-none">
                <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-purple-500"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-purple-500"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-purple-500"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-purple-500"></div>
              </div>
            </div>
          )}

          {!isScanning && (
            <div className="flex items-center justify-center h-64 bg-gray-700 rounded-lg">
              <div className="text-center text-gray-400">
                <div className="text-6xl mb-4">📱</div>
                <p>Click "Start Scanning" to begin</p>
              </div>
            </div>
          )}

          {/* Validation Result */}
          {validationResult && (
            <div className={`mt-4 p-4 rounded-lg ${
              validationResult.valid && !validationResult.ticket?.alreadyUsed
                ? 'bg-green-900 border border-green-600'
                : 'bg-red-900 border border-red-600'
            }`}>
              {validationResult.valid && !validationResult.ticket?.alreadyUsed ? (
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">✅</span>
                    <span className="text-green-400 font-semibold">Valid Ticket</span>
                  </div>
                  <div className="text-white">
                    <p><strong>Holder:</strong> {validationResult.ticket?.holderName}</p>
                    <p><strong>Ticket:</strong> {validationResult.ticket?.ticketNumber}</p>
                    <p><strong>Tier:</strong> {validationResult.ticket?.tierName}</p>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">❌</span>
                    <span className="text-red-400 font-semibold">
                      {validationResult.ticket?.alreadyUsed ? 'Already Used' : 'Invalid Ticket'}
                    </span>
                  </div>
                  {validationResult.ticket?.alreadyUsed && (
                    <div className="text-white">
                      <p><strong>Used At:</strong> {new Date(validationResult.ticket.usedAt!).toLocaleString()}</p>
                    </div>
                  )}
                  {validationResult.error && (
                    <p className="text-red-300">{validationResult.error}</p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Recent Check-ins */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Recent Check-ins</h2>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {stats.recentCheckIns.map((checkIn, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div>
                  <p className="text-white font-medium">{checkIn.holderName}</p>
                  <p className="text-gray-400 text-sm">{checkIn.ticketNumber}</p>
                </div>
                <div className="text-right">
                  <p className="text-green-400 text-sm">
                    {new Date(checkIn.checkedInAt).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success sound */}
      <audio ref={audioRef} preload="auto">
        <source src="/sounds/success-beep.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};
```

---

# 9. PAYMENT FLOW & SECURITY IMPLEMENTATION

## 9.1 Payment Architecture

### Payment Flow Design:
```typescript
// services/paymentService.ts
import Razorpay from 'razorpay';
import Stripe from 'stripe';
import crypto from 'crypto';

interface PaymentProvider {
  createOrder(amount: number, currency: string, metadata: any): Promise<any>;
  verifyPayment(paymentData: any): Promise<boolean>;
  refundPayment(paymentId: string, amount?: number): Promise<any>;
}

class RazorpayProvider implements PaymentProvider {
  private razorpay: Razorpay;

  constructor() {
    this.razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });
  }

  async createOrder(amount: number, currency: string, metadata: any) {
    const options = {
      amount: amount * 100, // Convert to paise
      currency,
      receipt: `order_${Date.now()}`,
      notes: metadata,
    };

    return await this.razorpay.orders.create(options);
  }

  async verifyPayment(paymentData: any): Promise<boolean> {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = paymentData;
    
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body.toString())
      .digest('hex');

    return expectedSignature === razorpay_signature;
  }

  async refundPayment(paymentId: string, amount?: number) {
    const refundData: any = { payment_id: paymentId };
    if (amount) refundData.amount = amount * 100;

    return await this.razorpay.payments.refund(paymentId, refundData);
  }
}

class StripeProvider implements PaymentProvider {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2023-10-16',
    });
  }

  async createOrder(amount: number, currency: string, metadata: any) {
    return await this.stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency,
      metadata,
      automatic_payment_methods: { enabled: true },
    });
  }

  async verifyPayment(paymentData: any): Promise<boolean> {
    try {
      const paymentIntent = await this.stripe.paymentIntents.retrieve(paymentData.payment_intent_id);
      return paymentIntent.status === 'succeeded';
    } catch (error) {
      return false;
    }
  }

  async refundPayment(paymentId: string, amount?: number) {
    const refundData: any = { payment_intent: paymentId };
    if (amount) refundData.amount = amount * 100;

    return await this.stripe.refunds.create(refundData);
  }
}

@Injectable()
export class PaymentService {
  private providers: Map<string, PaymentProvider> = new Map();

  constructor() {
    this.providers.set('razorpay', new RazorpayProvider());
    this.providers.set('stripe', new StripeProvider());
  }

  async createPaymentOrder(orderData: {
    orderId: string;
    amount: number;
    currency: string;
    provider: string;
    metadata: any;
  }) {
    const provider = this.providers.get(orderData.provider);
    if (!provider) {
      throw new Error(`Payment provider ${orderData.provider} not supported`);
    }

    const paymentOrder = await provider.createOrder(
      orderData.amount,
      orderData.currency,
      orderData.metadata
    );

    // Store payment order in database
    await this.storePaymentOrder({
      orderId: orderData.orderId,
      provider: orderData.provider,
      providerOrderId: paymentOrder.id,
      amount: orderData.amount,
      currency: orderData.currency,
      status: 'created',
    });

    return paymentOrder;
  }

  async verifyAndProcessPayment(paymentData: {
    orderId: string;
    provider: string;
    paymentDetails: any;
  }) {
    const provider = this.providers.get(paymentData.provider);
    if (!provider) {
      throw new Error(`Payment provider ${paymentData.provider} not supported`);
    }

    const isValid = await provider.verifyPayment(paymentData.paymentDetails);
    
    if (isValid) {
      // Update order status
      await this.updateOrderPaymentStatus(paymentData.orderId, 'completed');
      
      // Generate tickets
      await this.generateTickets(paymentData.orderId);
      
      // Send confirmation
      await this.sendPaymentConfirmation(paymentData.orderId);
      
      return { success: true, message: 'Payment verified and processed' };
    } else {
      await this.updateOrderPaymentStatus(paymentData.orderId, 'failed');
      return { success: false, message: 'Payment verification failed' };
    }
  }

  private async storePaymentOrder(orderData: any) {
    // Implementation to store payment order in database
  }

  private async updateOrderPaymentStatus(orderId: string, status: string) {
    // Implementation to update order status
  }

  private async generateTickets(orderId: string) {
    // Implementation to generate tickets after successful payment
  }

  private async sendPaymentConfirmation(orderId: string) {
    // Implementation to send confirmation email/SMS
  }
}
```

## 9.2 Pay-at-Counter Reservation System

```typescript
// services/reservationService.ts
@Injectable()
export class ReservationService {
  constructor(
    private readonly redis: Redis,
    private readonly notificationService: NotificationService,
  ) {}

  async createReservation(reservationData: {
    userId: string;
    eventId: string;
    tickets: Array<{ tierId: string; quantity: number }>;
    expiryHours: number;
  }) {
    const reservationId = uuidv4();
    const expiresAt = new Date(Date.now() + reservationData.expiryHours * 60 * 60 * 1000);
    
    // Generate unique reservation code
    const reservationCode = this.generateReservationCode();
    
    // Store reservation in Redis with expiry
    const reservation = {
      id: reservationId,
      userId: reservationData.userId,
      eventId: reservationData.eventId,
      tickets: reservationData.tickets,
      code: reservationCode,
      status: 'active',
      createdAt: new Date().toISOString(),
      expiresAt: expiresAt.toISOString(),
    };
    
    await this.redis.setex(
      `reservation:${reservationId}`,
      reservationData.expiryHours * 3600,
      JSON.stringify(reservation)
    );
    
    // Reserve ticket capacity
    await this.reserveTicketCapacity(reservationData.tickets);
    
    // Send confirmation SMS/WhatsApp
    await this.sendReservationConfirmation(reservationData.userId, reservation);
    
    // Schedule expiry reminder
    await this.scheduleExpiryReminder(reservationId, expiresAt);
    
    return {
      reservationId,
      reservationCode,
      expiresAt,
    };
  }

  async validateReservationAtCounter(code: string, venueStaffId: string) {
    // Find reservation by code
    const reservationKeys = await this.redis.keys('reservation:*');
    let reservation = null;
    
    for (const key of reservationKeys) {
      const data = await this.redis.get(key);
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed.code === code) {
          reservation = parsed;
          break;
        }
      }
    }
    
    if (!reservation) {
      return { valid: false, error: 'Reservation not found' };
    }
    
    if (new Date() > new Date(reservation.expiresAt)) {
      return { valid: false, error: 'Reservation expired' };
    }
    
    if (reservation.status !== 'active') {
      return { valid: false, error: 'Reservation already used or cancelled' };
    }
    
    return {
      valid: true,
      reservation: {
        id: reservation.id,
        userId: reservation.userId,
        eventId: reservation.eventId,
        tickets: reservation.tickets,
        expiresAt: reservation.expiresAt,
      },
    };
  }

  async processCounterPayment(reservationId: string, paymentData: {
    amount: number;
    paymentMethod: string;
    staffId: string;
  }) {
    const reservation = await this.getReservation(reservationId);
    if (!reservation) {
      throw new Error('Reservation not found');
    }
    
    // Create order record
    const order = await this.createOrderFromReservation(reservation, paymentData);
    
    // Generate tickets
    await this.generateTicketsFromReservation(order.id, reservation);
    
    // Mark reservation as completed
    await this.completeReservation(reservationId);
    
    // Release reserved capacity
    await this.releaseReservedCapacity(reservation.tickets);
    
    return order;
  }

  private generateReservationCode(): string {
    // Generate 6-digit alphanumeric code
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  private async reserveTicketCapacity(tickets: Array<{ tierId: string; quantity: number }>) {
    // Implementation to temporarily reduce available capacity
    for (const ticket of tickets) {
      await this.redis.incrby(`reserved_capacity:${ticket.tierId}`, ticket.quantity);
    }
  }

  private async releaseReservedCapacity(tickets: Array<{ tierId: string; quantity: number }>) {
    // Implementation to release reserved capacity
    for (const ticket of tickets) {
      await this.redis.decrby(`reserved_capacity:${ticket.tierId}`, ticket.quantity);
    }
  }

  private async sendReservationConfirmation(userId: string, reservation: any) {
    const user = await this.getUserById(userId);
    const event = await this.getEventById(reservation.eventId);
    
    const message = `Your tickets for ${event.title} are reserved! 
    Reservation Code: ${reservation.code}
    Valid until: ${new Date(reservation.expiresAt).toLocaleString()}
    Pay at venue counter to confirm your tickets.`;
    
    await this.notificationService.sendSMS(user.phoneNumber, message);
    await this.notificationService.sendWhatsApp(user.phoneNumber, {
      template: 'reservation_confirmation',
      data: {
        eventTitle: event.title,
        reservationCode: reservation.code,
        expiryTime: reservation.expiresAt,
      },
    });
  }

  private async scheduleExpiryReminder(reservationId: string, expiresAt: Date) {
    // Schedule reminder 2 hours before expiry
    const reminderTime = new Date(expiresAt.getTime() - 2 * 60 * 60 * 1000);
    
    if (reminderTime > new Date()) {
      // Use a job queue to schedule the reminder
      await this.scheduleJob('reservation_reminder', {
        reservationId,
        scheduledFor: reminderTime,
      });
    }
  }
}
```

## 9.3 Anti-Fraud & Security Measures

```typescript
// services/fraudDetectionService.ts
@Injectable()
export class FraudDetectionService {
  constructor(
    private readonly redis: Redis,
    private readonly analyticsService: AnalyticsService,
  ) {}

  async analyzeTransaction(transactionData: {
    userId: string;
    eventId: string;
    amount: number;
    paymentMethod: string;
    ipAddress: string;
    userAgent: string;
    tickets: Array<{ tierId: string; quantity: number }>;
  }): Promise<{ riskScore: number; flags: string[]; shouldBlock: boolean }> {
    const flags: string[] = [];
    let riskScore = 0;

    // 1. Velocity checks
    const recentTransactions = await this.getRecentTransactions(transactionData.userId, 3600); // Last hour
    if (recentTransactions.length > 5) {
      riskScore += 30;
      flags.push('HIGH_VELOCITY');
    }

    // 2. Amount anomaly detection
    const userAvgSpending = await this.getUserAverageSpending(transactionData.userId);
    if (transactionData.amount > userAvgSpending * 5) {
      riskScore += 25;
      flags.push('UNUSUAL_AMOUNT');
    }

    // 3. IP reputation check
    const ipRisk = await this.checkIPReputation(transactionData.ipAddress);
    if (ipRisk.isVPN || ipRisk.isTor) {
      riskScore += 20;
      flags.push('SUSPICIOUS_IP');
    }

    // 4. Device fingerprinting
    const deviceRisk = await this.analyzeDeviceFingerprint(transactionData.userAgent);
    if (deviceRisk.isEmulator || deviceRisk.isBot) {
      riskScore += 35;
      flags.push('SUSPICIOUS_DEVICE');
    }

    // 5. Bulk ticket purchase detection
    const totalTickets = transactionData.tickets.reduce((sum, t) => sum + t.quantity, 0);
    if (totalTickets > 10) {
      riskScore += 15;
      flags.push('BULK_PURCHASE');
    }

    // 6. Geographic anomaly
    const userLocation = await this.getUserLocation(transactionData.userId);
    const ipLocation = await this.getIPLocation(transactionData.ipAddress);
    if (this.calculateDistance(userLocation, ipLocation) > 1000) { // 1000km
      riskScore += 20;
      flags.push('LOCATION_MISMATCH');
    }

    // 7. Time-based anomaly
    const hour = new Date().getHours();
    if (hour < 6 || hour > 23) { // Unusual hours
      riskScore += 10;
      flags.push('UNUSUAL_TIME');
    }

    // 8. Payment method risk
    if (transactionData.paymentMethod === 'card') {
      const cardRisk = await this.checkCardRisk(transactionData);
      riskScore += cardRisk.score;
      flags.push(...cardRisk.flags);
    }

    const shouldBlock = riskScore > 70;

    // Log the analysis
    await this.logFraudAnalysis({
      userId: transactionData.userId,
      eventId: transactionData.eventId,
      riskScore,
      flags,
      shouldBlock,
      timestamp: new Date().toISOString(),
    });

    return { riskScore, flags, shouldBlock };
  }

  async validateQRCodeSecurity(qrData: string, eventId: string): Promise<{
    valid: boolean;
    ticket?: any;
    securityFlags: string[];
  }> {
    const securityFlags: string[] = [];
    
    try {
      // Decode and verify HMAC signature
      const decoded = JSON.parse(Buffer.from(qrData, 'base64').toString());
      const { signature, ...payload } = decoded;
      
      const expectedSignature = crypto
        .createHmac('sha256', process.env.QR_SECRET!)
        .update(JSON.stringify(payload))
        .digest('hex');
      
      if (signature !== expectedSignature) {
        securityFlags.push('INVALID_SIGNATURE');
        return { valid: false, securityFlags };
      }
      
      // Check timestamp freshness (prevent replay attacks)
      const age = Date.now() - payload.timestamp;
      if (age > 24 * 60 * 60 * 1000) { // 24 hours
        securityFlags.push('EXPIRED_QR');
        return { valid: false, securityFlags };
      }
      
      // Verify event ID matches
      if (payload.eventId !== eventId) {
        securityFlags.push('EVENT_MISMATCH');
        return { valid: false, securityFlags };
      }
      
      // Check for duplicate scans
      const scanKey = `qr_scan:${payload.ticketId}:${Math.floor(Date.now() / 60000)}`; // Per minute
      const scanCount = await this.redis.incr(scanKey);
      await this.redis.expire(scanKey, 60);
      
      if (scanCount > 3) { // Max 3 scans per minute
        securityFlags.push('RAPID_SCANNING');
        return { valid: false, securityFlags };
      }
      
      // Get ticket details
      const ticket = await this.getTicketById(payload.ticketId);
      if (!ticket) {
        securityFlags.push('TICKET_NOT_FOUND');
        return { valid: false, securityFlags };
      }
      
      if (ticket.status !== 'valid') {
        securityFlags.push('TICKET_INVALID_STATUS');
        return { valid: false, securityFlags };
      }
      
      return { valid: true, ticket, securityFlags };
      
    } catch (error) {
      securityFlags.push('DECODE_ERROR');
      return { valid: false, securityFlags };
    }
  }

  private async checkIPReputation(ipAddress: string): Promise<{
    isVPN: boolean;
    isTor: boolean;
    riskScore: number;
  }> {
    // Check against IP reputation databases
    // This would integrate with services like MaxMind, IPQualityScore, etc.
    
    // Simplified implementation
    const vpnRanges = ['10.', '192.168.', '172.']; // Private IP ranges (simplified)
    const isVPN = vpnRanges.some(range => ipAddress.startsWith(range));
    
    return {
      isVPN,
      isTor: false, // Would check against Tor exit node list
      riskScore: isVPN ? 20 : 0,
    };
  }

  private async analyzeDeviceFingerprint(userAgent: string): Promise<{
    isEmulator: boolean;
    isBot: boolean;
    riskScore: number;
  }> {
    // Analyze user agent for suspicious patterns
    const botPatterns = ['bot', 'crawler', 'spider', 'scraper'];
    const emulatorPatterns = ['emulator', 'simulator'];
    
    const isBot = botPatterns.some(pattern => 
      userAgent.toLowerCase().includes(pattern)
    );
    
    const isEmulator = emulatorPatterns.some(pattern => 
      userAgent.toLowerCase().includes(pattern)
    );
    
    return {
      isBot,
      isEmulator,
      riskScore: (isBot ? 30 : 0) + (isEmulator ? 25 : 0),
    };
  }

  private async logFraudAnalysis(analysis: any) {
    await this.analyticsService.track({
      eventType: 'fraud_analysis',
      eventData: analysis,
    });
  }
}

// Rate limiting middleware
@Injectable()
export class RateLimitGuard implements CanActivate {
  constructor(private readonly redis: Redis) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const key = this.generateKey(request);
    
    const current = await this.redis.incr(key);
    if (current === 1) {
      await this.redis.expire(key, 60); // 1 minute window
    }
    
    // Different limits for different endpoints
    const limit = this.getLimit(request.route.path);
    
    if (current > limit) {
      throw new HttpException('Rate limit exceeded', HttpStatus.TOO_MANY_REQUESTS);
    }
    
    return true;
  }

  private generateKey(request: any): string {
    const userId = request.user?.id || 'anonymous';
    const ip = request.ip;
    const endpoint = request.route.path;
    
    return `rate_limit:${userId}:${ip}:${endpoint}`;
  }

  private getLimit(path: string): number {
    const limits: Record<string, number> = {
      '/api/auth/send-otp': 5,
      '/api/auth/verify-otp': 10,
      '/api/tickets/book': 20,
      '/api/events/search': 100,
      default: 60,
    };
    
    return limits[path] || limits.default;
  }
}
```

---

# 10. INFRASTRUCTURE & DEVOPS PIPELINE

## 10.1 Infrastructure Architecture

### Kubernetes Deployment Configuration:

```yaml
# k8s/namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: nightscene-prod
  labels:
    name: nightscene-prod

---
# k8s/configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: nightscene-config
  namespace: nightscene-prod
data:
  NODE_ENV: "production"
  DATABASE_HOST: "postgres-service"
  REDIS_HOST: "redis-service"
  ELASTICSEARCH_HOST: "elasticsearch-service"
  CDN_URL: "https://cdn.nightscene.in"
  API_BASE_URL: "https://api.nightscene.in"

---
# k8s/secrets.yaml
apiVersion: v1
kind: Secret
metadata:
  name: nightscene-secrets
  namespace: nightscene-prod
type: Opaque
data:
  DATABASE_PASSWORD: <base64-encoded-password>
  JWT_SECRET: <base64-encoded-jwt-secret>
  RAZORPAY_KEY_SECRET: <base64-encoded-razorpay-secret>
  QR_SECRET: <base64-encoded-qr-secret>

---
# k8s/backend-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nightscene-backend
  namespace: nightscene-prod
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nightscene-backend
  template:
    metadata:
      labels:
        app: nightscene-backend
    spec:
      containers:
      - name: backend
        image: nightscene/backend:latest
        ports:
        - containerPort: 3000
        env:
        - name: PORT
          value: "3000"
        envFrom:
        - configMapRef:
            name: nightscene-config
        - secretRef:
            name: nightscene-secrets
        resources:
          requests:
            memory: "512Mi"
            cpu: "250m"
          limits:
            memory: "1Gi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5

---
# k8s/backend-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: nightscene-backend-service
  namespace: nightscene-prod
spec:
  selector:
    app: nightscene-backend
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: ClusterIP

---
# k8s/postgres-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: postgres
  namespace: nightscene-prod
spec:
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
      - name: postgres
        image: postgres:15
        env:
        - name: POSTGRES_DB
          value: nightscene
        - name: POSTGRES_USER
          value: nightscene
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: nightscene-secrets
              key: DATABASE_PASSWORD
        ports:
        - containerPort: 5432
        volumeMounts:
        - name: postgres-storage
          mountPath: /var/lib/postgresql/data
        resources:
          requests:
            memory: "1Gi"
            cpu: "500m"
          limits:
            memory: "2Gi"
            cpu: "1000m"
      volumes:
      - name: postgres-storage
        persistentVolumeClaim:
          claimName: postgres-pvc

---
# k8s/postgres-pvc.yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: postgres-pvc
  namespace: nightscene-prod
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 100Gi
  storageClassName: fast-ssd

---
# k8s/redis-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: redis
  namespace: nightscene-prod
spec:
  replicas: 1
  selector:
    matchLabels:
      app: redis
  template:
    metadata:
      labels:
        app: redis
    spec:
      containers:
      - name: redis
        image: redis:7-alpine
        ports:
        - containerPort: 6379
        resources:
          requests:
            memory: "256Mi"
            cpu: "100m"
          limits:
            memory: "512Mi"
            cpu: "200m"
        volumeMounts:
        - name: redis-storage
          mountPath: /data
      volumes:
      - name: redis-storage
        persistentVolumeClaim:
          claimName: redis-pvc

---
# k8s/ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nightscene-ingress
  namespace: nightscene-prod
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/cluster-issuer: letsencrypt-prod
    nginx.ingress.kubernetes.io/rate-limit: "100"
    nginx.ingress.kubernetes.io/rate-limit-window: "1m"
spec:
  tls:
  - hosts:
    - api.nightscene.in
    - organizer.nightscene.in
    secretName: nightscene-tls
  rules:
  - host: api.nightscene.in
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: nightscene-backend-service
            port:
              number: 80
  - host: organizer.nightscene.in
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: nightscene-organizer-service
            port:
              number: 80

---
# k8s/hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: nightscene-backend-hpa
  namespace: nightscene-prod
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: nightscene-backend
  minReplicas: 3
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
```

## 10.2 CI/CD Pipeline Configuration

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: nightscene

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: test
          POSTGRES_DB: nightscene_test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432
      
      redis:
        image: redis:7-alpine
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 6379:6379

    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linting
      run: npm run lint
    
    - name: Run type checking
      run: npm run type-check
    
    - name: Run unit tests
      run: npm run test:unit
      env:
        DATABASE_URL: postgresql://postgres:test@localhost:5432/nightscene_test
        REDIS_URL: redis://localhost:6379
    
    - name: Run integration tests
      run: npm run test:integration
      env:
        DATABASE_URL: postgresql://postgres:test@localhost:5432/nightscene_test
        REDIS_URL: redis://localhost:6379
    
    - name: Run E2E tests
      run: npm run test:e2e
      env:
        DATABASE_URL: postgresql://postgres:test@localhost:5432/nightscene_test
        REDIS_URL: redis://localhost:6379

  security-scan:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    
    - name: Run security audit
      run: npm audit --audit-level high
    
    - name: Run Snyk security scan
      uses: snyk/actions/node@master
      env:
        SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}

  build-and-push:
    needs: [test, security-scan]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Log in to Container Registry
      uses: docker/login-action@v3
      with:
        registry: ${{ env.REGISTRY }}
        username: ${{ github.actor }}
        password: ${{ secrets.GITHUB_TOKEN }}
    
    - name: Extract metadata
      id: meta
      uses: docker/metadata-action@v5
      with:
        images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
        tags: |
          type=ref,event=branch
          type=sha,prefix={{branch}}-
          type=raw,value=latest,enable={{is_default_branch}}
    
    - name: Build and push Docker image
      uses: docker/build-push-action@v5
      with:
        context: .
        push: true
        tags: ${{ steps.meta.outputs.tags }}
        labels: ${{ steps.meta.outputs.labels }}
        cache-from: type=gha
        cache-to: type=gha,mode=max

  deploy:
    needs: build-and-push
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup kubectl
      uses: azure/setup-kubectl@v3
      with:
        version: 'v1.28.0'
    
    - name: Configure kubectl
      run: |
        echo "${{ secrets.KUBE_CONFIG }}" | base64 -d > kubeconfig
        export KUBECONFIG=kubeconfig
    
    - name: Deploy to Kubernetes
      run: |
        export KUBECONFIG=kubeconfig
        
        # Update image tag in deployment
        kubectl set image deployment/nightscene-backend \
          backend=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }} \
          -n nightscene-prod
        
        # Wait for rollout to complete
        kubectl rollout status deployment/nightscene-backend -n nightscene-prod --timeout=300s
        
        # Verify deployment
        kubectl get pods -n nightscene-prod -l app=nightscene-backend

  notify:
    needs: [deploy]
    runs-on: ubuntu-latest
    if: always()
    
    steps:
    - name: Notify Slack
      uses: 8398a7/action-slack@v3
      with:
        status: ${{ job.status }}
        channel: '#deployments'
        webhook_url: ${{ secrets.SLACK_WEBHOOK }}
        fields: repo,message,commit,author,action,eventName,ref,workflow
```

## 10.3 Monitoring & Observability

```yaml
# k8s/monitoring/prometheus.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: prometheus-config
  namespace: nightscene-prod
data:
  prometheus.yml: |
    global:
      scrape_interval: 15s
      evaluation_interval: 15s
    
    rule_files:
      - "alert_rules.yml"
    
    alerting:
      alertmanagers:
        - static_configs:
            - targets:
              - alertmanager:9093
    
    scrape_configs:
      - job_name: 'nightscene-backend'
        static_configs:
          - targets: ['nightscene-backend-service:80']
        metrics_path: /metrics
        scrape_interval: 10s
      
      - job_name: 'postgres'
        static_configs:
          - targets: ['postgres-exporter:9187']
      
      - job_name: 'redis'
        static_configs:
          - targets: ['redis-exporter:9121']
      
      - job_name: 'kubernetes-pods'
        kubernetes_sd_configs:
          - role: pod
        relabel_configs:
          - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
            action: keep
            regex: true

  alert_rules.yml: |
    groups:
      - name: nightscene-alerts
        rules:
          - alert: HighErrorRate
            expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.1
            for: 5m
            labels:
              severity: critical
            annotations:
              summary: "High error rate detected"
              description: "Error rate is {{ $value }} errors per second"
          
          - alert: HighResponseTime
            expr: histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 2
            for: 5m
            labels:
              severity: warning
            annotations:
              summary: "High response time detected"
              description: "95th percentile response time is {{ $value }} seconds"
          
          - alert: DatabaseConnectionsHigh
            expr: pg_stat_activity_count > 80
            for: 5m
            labels:
              severity: warning
            annotations:
              summary: "High database connections"
              description: "Database has {{ $value }} active connections"
          
          - alert: RedisMemoryHigh
            expr: redis_memory_used_bytes / redis_memory_max_bytes > 0.9
            for: 5m
            labels:
              severity: critical
            annotations:
              summary: "Redis memory usage high"
              description: "Redis memory usage is {{ $value }}%"

---
# k8s/monitoring/grafana-dashboard.json
{
  "dashboard": {
    "id": null,
    "title": "NightScene Application Dashboard",
    "tags": ["nightscene"],
    "timezone": "browser",
    "panels": [
      {
        "id": 1,
        "title": "Request Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "rate(http_requests_total[5m])",
            "legendFormat": "{{method}} {{route}}"
          }
        ],
        "yAxes": [
          {
            "label": "Requests/sec"
          }
        ]
      },
      {
        "id": 2,
        "title": "Response Time",
        "type": "graph",
        "targets": [
          {
            "expr": "histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))",
            "legendFormat": "95th percentile"
          },
          {
            "expr": "histogram_quantile(0.50, rate(http_request_duration_seconds_bucket[5m]))",
            "legendFormat": "50th percentile"
          }
        ]
      },
      {
        "id": 3,
        "title": "Error Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "rate(http_requests_total{status=~\"5..\"}[5m])",
            "legendFormat": "5xx errors"
          },
          {
            "expr": "rate(http_requests_total{status=~\"4..\"}[5m])",
            "legendFormat": "4xx errors"
          }
        ]
      },
      {
        "id": 4,
        "title": "Database Performance",
        "type": "graph",
        "targets": [
          {
            "expr": "pg_stat_activity_count",
            "legendFormat": "Active connections"
          },
          {
            "expr": "rate(pg_stat_database_tup_inserted[5m])",
            "legendFormat": "Inserts/sec"
          }
        ]
      },
      {
        "id": 5,
        "title": "Business Metrics",
        "type": "stat",
        "targets": [
          {
            "expr": "increase(tickets_sold_total[1h])",
            "legendFormat": "Tickets sold (last hour)"
          },
          {
            "expr": "increase(revenue_total[1h])",
            "legendFormat": "Revenue (last hour)"
          },
          {
            "expr": "active_users_total",
            "legendFormat": "Active users"
          }
        ]
      }
    ],
    "time": {
      "from": "now-1h",
      "to": "now"
    },
    "refresh": "30s"
  }
}
```

## 10.4 Logging & Error Tracking

```typescript
// src/common/interceptors/logging.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Request, Response } from 'express';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    const response = context.switchToHttp().getResponse<Response>();
    const { method, url, body, query, params, headers } = request;
    const userAgent = headers['user-agent'] || '';
    const ip = headers['x-forwarded-for'] || request.connection.remoteAddress;
    
    const startTime = Date.now();
    const requestId = this.generateRequestId();
    
    // Add request ID to response headers
    response.setHeader('X-Request-ID', requestId);
    
    // Log request
    this.logger.log({
      type: 'REQUEST',
      requestId,
      method,
      url,
      body: this.sanitizeBody(body),
      query,
      params,
      userAgent,
      ip,
      timestamp: new Date().toISOString(),
    });

    return next.handle().pipe(
      tap((data) => {
        const duration = Date.now() - startTime;
        
        // Log successful response
        this.logger.log({
          type: 'RESPONSE',
          requestId,
          method,
          url,
          statusCode: response.statusCode,
          duration,
          responseSize: JSON.stringify(data).length,
          timestamp: new Date().toISOString(),
        });
      }),
      catchError((error) => {
        const duration = Date.now() - startTime;
        
        // Log error response
        this.logger.error({
          type: 'ERROR',
          requestId,
          method,
          url,
          statusCode: error.status || 500,
          duration,
          error: {
            message: error.message,
            stack: error.stack,
            name: error.name,
          },
          timestamp: new Date().toISOString(),
        });
        
        throw error;
      }),
    );
  }

  private generateRequestId(): string {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }

  private sanitizeBody(body: any): any {
    if (!body) return body;
    
    const sensitiveFields = ['password', 'token', 'secret', 'key', 'otp'];
    const sanitized = { ...body };
    
    for (const field of sensitiveFields) {
      if (sanitized[field]) {
        sanitized[field] = '[REDACTED]';
      }
    }
    
    return sanitized;
  }
}

// Error tracking service
@Injectable()
export class ErrorTrackingService {
  private readonly logger = new Logger(ErrorTrackingService.name);

  async trackError(error: Error, context?: any) {
    const errorData = {
      message: error.message,
      stack: error.stack,
      name: error.name,
      context,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      version: process.env.APP_VERSION,
    };

    // Log locally
    this.logger.error(errorData);

    // Send to external error tracking service (e.g., Sentry)
    if (process.env.SENTRY_DSN) {
      // Sentry.captureException(error, { extra: context });
    }

    // Store in database for analysis
    await this.storeErrorInDatabase(errorData);
  }

  private async storeErrorInDatabase(errorData: any) {
    // Implementation to store error in database
    // This helps with error analysis and debugging
  }
}
```

---

# 11. 8-WEEK DEVELOPMENT ROADMAP & SUCCESS METRICS

## 11.1 Development Roadmap

### **Week 1-2: Foundation & Core Backend**

**Sprint 1 Goals:**
- Set up development environment and CI/CD pipeline
- Implement core backend architecture
- Database schema implementation
- Basic authentication system

**Tasks:**
- [ ] Project setup and repository structure
- [ ] Docker containerization
- [ ] Database schema creation and migrations
- [ ] User authentication (OTP-based)
- [ ] Basic API endpoints (users, events, venues)
- [ ] Unit test framework setup
- [ ] CI/CD pipeline configuration

**Team Allocation:**
- Backend Lead: API architecture, database design
- DevOps Engineer: Infrastructure setup, CI/CD
- Full-Stack Developer: Authentication system
- QA Engineer: Test framework setup

**Deliverables:**
- Working backend API with authentication
- Database with core entities
- CI/CD pipeline operational
- Basic API documentation

---

### **Week 3-4: Event Management & Discovery**

**Sprint 2 Goals:**
- Complete event CRUD operations
- Implement search and filtering
- Basic recommendation engine (rule-based)
- Venue and promoter management

**Tasks:**
- [ ] Event creation and management APIs
- [ ] Venue management system
- [ ] Promoter onboarding flow
- [ ] Search and filtering implementation
- [ ] Basic recommendation algorithm
- [ ] Image upload and CDN integration
- [ ] Event feed API with pagination

**Team Allocation:**
- Backend Lead: Event management APIs
- Full-Stack Developer: Search implementation
- Data Scientist: Basic recommendation engine
- Frontend Developer: Start mobile app structure

**Deliverables:**
- Complete event management system
- Working search and filters
- Basic personalized recommendations
- Image upload functionality

---

### **Week 5-6: Mobile App & User Experience**

**Sprint 3 Goals:**
- React Native app with core screens
- Event discovery and detail views
- User onboarding flow
- Social features implementation

**Tasks:**
- [ ] Mobile app setup and navigation
- [ ] User onboarding screens
- [ ] Event feed and discovery UI
- [ ] Event detail screen
- [ ] User profile and settings
- [ ] Follow system implementation
- [ ] Social sharing features
- [ ] Push notification setup

**Team Allocation:**
- Mobile Lead: Core app screens and navigation
- Frontend Developer: UI components and styling
- Backend Developer: Social features APIs
- UX Designer: User flow optimization

**Deliverables:**
- Functional mobile app (MVP)
- User onboarding complete
- Event discovery working
- Social features operational

---

### **Week 7: Payment Integration & Ticketing**

**Sprint 4 Goals:**
- Payment gateway integration
- Ticket booking flow
- QR code generation and validation
- Reservation system

**Tasks:**
- [ ] Razorpay integration
- [ ] Ticket booking API
- [ ] QR code generation system
- [ ] Payment verification webhooks
- [ ] Reservation system for pay-at-counter
- [ ] Ticket management screens
- [ ] Refund and cancellation logic
- [ ] Security implementation

**Team Allocation:**
- Backend Lead: Payment integration
- Mobile Developer: Booking flow UI
- Security Engineer: QR code security
- Full-Stack Developer: Ticket management

**Deliverables:**
- Complete payment system
- Ticket booking functional
- QR code validation working
- Reservation system operational

---

### **Week 8: Organizer Portal & Launch Preparation**

**Sprint 5 Goals:**
- Organizer dashboard completion
- Analytics implementation
- Performance optimization
- Production deployment

**Tasks:**
- [ ] Organizer portal completion
- [ ] Event analytics dashboard
- [ ] Check-in portal for venues
- [ ] Performance optimization
- [ ] Load testing
- [ ] Security audit
- [ ] Production deployment
- [ ] App store submission

**Team Allocation:**
- Full-Stack Developer: Organizer portal
- Data Engineer: Analytics dashboard
- DevOps Engineer: Production deployment
- QA Engineer: Load testing and security audit

**Deliverables:**
- Complete organizer portal
- Analytics dashboard functional
- Production-ready application
- App store ready for submission

---

## 11.2 Team Structure & Roles

### **Core Team (8 members):**

1. **Technical Lead / Backend Architect** (1)
   - Overall technical direction
   - Backend architecture and core APIs
   - Code review and quality assurance

2. **Mobile Lead / React Native Developer** (1)
   - Mobile app development
   - UI/UX implementation
   - App store deployment

3. **Full-Stack Developer** (2)
   - Frontend and backend development
   - Organizer portal
   - Integration work

4. **DevOps Engineer** (1)
   - Infrastructure setup
   - CI/CD pipeline
   - Production deployment and monitoring

5. **Data Scientist / ML Engineer** (1)
   - Recommendation system
   - Analytics and insights
   - Data pipeline setup

6. **QA Engineer** (1)
   - Test automation
   - Security testing
   - Performance testing

7. **UX/UI Designer** (1)
   - User experience design
   - Visual design system
   - Prototyping and user testing

### **Extended Team (as needed):**
- Security Consultant (part-time)
- Business Analyst (part-time)
- Content Manager (part-time)

---

## 11.3 Success Metrics & KPIs

### **Technical KPIs:**

**Performance Metrics:**
- API response time: < 200ms (95th percentile)
- App launch time: < 3 seconds
- Search response time: < 500ms
- Image load time: < 2 seconds
- Uptime: > 99.9%

**Quality Metrics:**
- Code coverage: > 80%
- Bug density: < 1 bug per 1000 lines of code
- Security vulnerabilities: 0 critical, < 5 high
- App store rating: > 4.5 stars

### **Business KPIs:**

**User Acquisition & Engagement:**
- Monthly Active Users (MAU): Target 50K in first 3 months
- Daily Active Users (DAU): Target 15K in first 3 months
- User retention rate: > 40% (Day 7), > 20% (Day 30)
- Session duration: > 5 minutes average
- App downloads: Target 100K in first 3 months

**Revenue Metrics:**
- Gross Merchandise Value (GMV): Target ₹50L in first 3 months
- Commission revenue: Target ₹5L in first 3 months
- Average order value: ₹800-1200
- Conversion rate: > 8% (view to purchase)
- Payment success rate: > 95%

**Event & Organizer Metrics:**
- Events listed: Target 1000+ in first 3 months
- Active organizers: Target 200+ in first 3 months
- Tickets sold: Target 50K in first 3 months
- Event discovery rate: > 60% of users discover new events
- Organizer retention: > 70% create multiple events

**Recommendation System Performance:**
- Click-through rate (CTR): > 15% on recommended events
- Conversion rate on recommendations: > 10%
- Recommendation coverage: > 80% of events get recommended
- Personalization lift: > 25% improvement over non-personalized

### **Operational KPIs:**

**Customer Support:**
- Response time: < 2 hours
- Resolution time: < 24 hours
- Customer satisfaction: > 4.5/5
- Support ticket volume: < 5% of active users

**Fraud & Security:**
- Fraud rate: < 0.1% of transactions
- QR code validation accuracy: > 99.9%
- Security incident response: < 1 hour
- Data breach incidents: 0

### **Growth Metrics:**

**Market Penetration:**
- City coverage: 5 major cities in first 3 months
- Market share: Target 10% in covered cities
- Brand awareness: Target 25% in target demographic
- Organic growth rate: > 30% month-over-month

**Social & Viral Metrics:**
- Social sharing rate: > 20% of bookings shared
- Referral rate: > 15% of users refer friends
- Viral coefficient: > 0.3
- Social media engagement: > 5% engagement rate

---

## 11.4 Risk Mitigation & Contingency Plans

### **Technical Risks:**

**Risk: Scalability Issues**
- Mitigation: Load testing from Week 6, horizontal scaling architecture
- Contingency: Cloud auto-scaling, CDN optimization

**Risk: Payment Gateway Failures**
- Mitigation: Multiple payment providers (Razorpay + Stripe)
- Contingency: Manual payment processing, offline booking system

**Risk: Security Vulnerabilities**
- Mitigation: Regular security audits, penetration testing
- Contingency: Incident response plan, security patches

### **Business Risks:**

**Risk: Low User Adoption**
- Mitigation: User research, beta testing, referral programs
- Contingency: Pivot strategy, enhanced marketing

**Risk: Organizer Resistance**
- Mitigation: Competitive commission rates, superior tools
- Contingency: Direct venue partnerships, exclusive events

**Risk: Competition from Established Players**
- Mitigation: Unique value proposition, superior UX
- Contingency: Niche market focus, partnership strategy

---

## 11.5 Post-Launch Roadmap (Months 4-12)

### **Month 4-6: Growth & Optimization**
- Advanced ML recommendation system
- Social features enhancement
- Multi-city expansion
- Performance optimization

### **Month 7-9: Platform Expansion**
- Web application launch
- Corporate event booking
- Loyalty program implementation
- Advanced analytics for organizers

### **Month 10-12: Ecosystem Development**
- Artist management tools
- Venue partnership program
- API for third-party integrations
- International expansion planning

---

This comprehensive blueprint provides a complete roadmap for building NightScene from concept to production-ready application. The 8-week timeline is aggressive but achievable with the right team and focused execution. The success metrics ensure we're building not just a functional product, but one that delivers real value to users and sustainable business growth.

The architecture is designed to scale from MVP to millions of users, with careful consideration of security, performance, and user experience at every level. The recommendation system will differentiate us from competitors, while the comprehensive organizer tools will drive supply-side growth.

Most importantly, this blueprint maintains focus on the core mission: making nightlife discovery in India more personalized, social, and seamless than ever before.