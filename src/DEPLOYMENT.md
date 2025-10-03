# Prashiskshan Deployment Guide

## Overview

This guide covers deploying the Prashiskshan platform from development to production. The platform consists of a React frontend and a Supabase backend.

## Architecture

```
┌─────────────┐
│   Users     │
└──────┬──────┘
       │
┌──────▼────────────────────┐
│   CDN / Load Balancer     │
│   (Vercel/Netlify)        │
└──────┬────────────────────┘
       │
┌──────▼────────────────────┐
│   React Frontend          │
│   - Static Assets         │
│   - Client-side Routing   │
└──────┬────────────────────┘
       │
┌──────▼────────────────────┐
│   Supabase Backend        │
│   - PostgreSQL Database   │
│   - Authentication        │
│   - Storage               │
│   - Real-time             │
└───────────────────────────┘
```

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (or self-hosted instance)
- Domain name (optional but recommended)
- SSL certificate (auto-provisioned by hosting platforms)

## Environment Variables

### Frontend (.env)
```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# API Configuration (if using custom backend)
VITE_API_URL=https://api.prashiskshan.edu.in/v1

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_CHAT=false

# Third-party Services
VITE_GOOGLE_CLIENT_ID=your-google-client-id
VITE_RAZORPAY_KEY_ID=your-razorpay-key

# Environment
VITE_ENV=production
```

### Backend (Supabase)
```bash
# Database
DATABASE_URL=postgresql://postgres:password@db.supabase.co:5432/postgres

# JWT
JWT_SECRET=your-jwt-secret
JWT_EXPIRY=7d

# Storage
STORAGE_BACKEND=supabase
MAX_FILE_SIZE=10485760  # 10MB

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Webhooks
WEBHOOK_SECRET=your-webhook-secret

# Rate Limiting
RATE_LIMIT_WINDOW=60000  # 1 minute in ms
RATE_LIMIT_MAX_REQUESTS=100
```

## Step 1: Setup Supabase Backend

### 1.1 Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up
2. Create a new project
3. Note down your project URL and anon key

### 1.2 Run Database Migrations

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref your-project-ref

# Run migrations
supabase db push
```

Or manually execute SQL files:
```bash
# In Supabase Dashboard SQL Editor
# 1. Execute /database/schema.sql
# 2. Execute /database/seed.sql (optional for demo data)
```

### 1.3 Configure Authentication

In Supabase Dashboard → Authentication:

1. **Email Settings:**
   - Enable email confirmation
   - Customize email templates
   - Set redirect URLs

2. **OAuth Providers:**
   - Enable Google OAuth
   - Add Google Client ID and Secret
   - Set redirect URL: `https://your-domain.com/auth/callback`

3. **Security:**
   - Enable RLS (Row Level Security)
   - Set up rate limiting
   - Configure CAPTCHA for signup

### 1.4 Configure Storage

In Supabase Dashboard → Storage:

1. Create buckets:
   - `avatars` (public)
   - `resumes` (private)
   - `documents` (private)
   - `reports` (private)
   - `certificates` (public)

2. Set storage policies:
```sql
-- Allow authenticated users to upload avatars
CREATE POLICY "Users can upload own avatar"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Allow users to read their own documents
CREATE POLICY "Users can read own documents"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'resumes' AND auth.uid()::text = (storage.foldername(name))[1]);
```

## Step 2: Frontend Deployment

### Option A: Deploy to Vercel (Recommended)

1. **Connect Repository:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login
   vercel login
   
   # Deploy
   vercel
   ```

2. **Configure Build Settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Set Environment Variables:**
   - Add all VITE_* variables in Vercel dashboard
   - Environment: Production

4. **Custom Domain:**
   - Add custom domain in Vercel dashboard
   - Update DNS records
   - SSL auto-provisioned

### Option B: Deploy to Netlify

1. **Connect Repository:**
   ```bash
   # Install Netlify CLI
   npm i -g netlify-cli
   
   # Login
   netlify login
   
   # Initialize
   netlify init
   
   # Deploy
   netlify deploy --prod
   ```

2. **Configure:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Add environment variables

3. **Setup Redirects:**
   Create `public/_redirects`:
   ```
   /*    /index.html   200
   ```

### Option C: Self-hosted (Docker)

1. **Create Dockerfile:**
   ```dockerfile
   # Build stage
   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build
   
   # Production stage
   FROM nginx:alpine
   COPY --from=builder /app/dist /usr/share/nginx/html
   COPY nginx.conf /etc/nginx/conf.d/default.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Create nginx.conf:**
   ```nginx
   server {
     listen 80;
     server_name _;
     
     root /usr/share/nginx/html;
     index index.html;
     
     location / {
       try_files $uri $uri/ /index.html;
     }
     
     # Cache static assets
     location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
       expires 1y;
       add_header Cache-Control "public, immutable";
     }
   }
   ```

3. **Build and Run:**
   ```bash
   docker build -t prashiskshan-frontend .
   docker run -d -p 80:80 prashiskshan-frontend
   ```

## Step 3: Domain & SSL Configuration

### Custom Domain Setup

1. **Update DNS Records:**
   ```
   Type: A
   Name: @
   Value: [Your server IP or hosting provider IP]
   
   Type: CNAME
   Name: www
   Value: your-domain.com
   ```

2. **SSL Certificate:**
   - Vercel/Netlify: Auto-provisioned
   - Self-hosted: Use Let's Encrypt
     ```bash
     # Install certbot
     sudo apt install certbot python3-certbot-nginx
     
     # Get certificate
     sudo certbot --nginx -d prashiskshan.edu.in -d www.prashiskshan.edu.in
     ```

## Step 4: Database Backup & Recovery

### Automated Backups

1. **Supabase (Built-in):**
   - Daily automated backups
   - Point-in-time recovery
   - Configure in Project Settings → Database

2. **Manual Backup:**
   ```bash
   # Using pg_dump
   pg_dump -h db.your-project.supabase.co \
           -U postgres \
           -d postgres \
           -F c \
           -f backup_$(date +%Y%m%d).dump
   ```

3. **Restore from Backup:**
   ```bash
   pg_restore -h db.your-project.supabase.co \
              -U postgres \
              -d postgres \
              backup_20251002.dump
   ```

### Backup Strategy

- **Daily**: Automated full backups (retained for 7 days)
- **Weekly**: Full backups (retained for 1 month)
- **Monthly**: Full backups (retained for 1 year)
- **Critical**: Before major updates or schema changes

## Step 5: Monitoring & Logging

### Setup Application Monitoring

1. **Supabase Logs:**
   - Access via Dashboard → Logs
   - Filter by severity
   - Export for analysis

2. **Frontend Monitoring:**
   ```bash
   npm install @sentry/react
   ```
   
   ```typescript
   // src/main.tsx
   import * as Sentry from "@sentry/react";
   
   Sentry.init({
     dsn: "your-sentry-dsn",
     environment: import.meta.env.VITE_ENV,
     tracesSampleRate: 1.0,
   });
   ```

3. **Performance Monitoring:**
   - Use Vercel Analytics
   - Or Google Analytics
   - Monitor Core Web Vitals

### Health Checks

Create health check endpoint:
```typescript
// /api/health
{
  "status": "healthy",
  "timestamp": "2025-10-02T10:00:00Z",
  "database": "connected",
  "storage": "available",
  "version": "1.0.0"
}
```

## Step 6: CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        env:
          VITE_SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY }}
          
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

## Step 7: Security Hardening

### Frontend Security

1. **Content Security Policy:**
   Add to `index.html`:
   ```html
   <meta http-equiv="Content-Security-Policy" 
         content="default-src 'self'; 
                  script-src 'self' 'unsafe-inline'; 
                  style-src 'self' 'unsafe-inline'; 
                  img-src 'self' data: https:;">
   ```

2. **Security Headers:**
   ```nginx
   add_header X-Frame-Options "SAMEORIGIN" always;
   add_header X-Content-Type-Options "nosniff" always;
   add_header X-XSS-Protection "1; mode=block" always;
   add_header Referrer-Policy "strict-origin-when-cross-origin" always;
   ```

### Backend Security

1. **Rate Limiting:**
   - Configured in Supabase
   - 100 requests per minute per user
   - 5 auth requests per minute per IP

2. **Input Validation:**
   - All inputs validated server-side
   - SQL injection prevention via parameterized queries
   - XSS prevention via output encoding

3. **Authentication:**
   - JWT with secure secret
   - Token expiry: 7 days
   - Refresh token rotation

## Step 8: Performance Optimization

### Frontend Optimization

1. **Code Splitting:**
   ```typescript
   // Lazy load routes
   const StudentDashboard = lazy(() => import('./components/StudentDashboard'));
   ```

2. **Image Optimization:**
   - Use WebP format
   - Implement lazy loading
   - Add loading="lazy" to images

3. **Caching Strategy:**
   ```typescript
   // Service Worker for PWA
   if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('/sw.js');
   }
   ```

### Database Optimization

1. **Query Optimization:**
   - Use indexes on frequently queried columns
   - Avoid N+1 queries
   - Use database views for complex queries

2. **Connection Pooling:**
   - Configured in Supabase by default
   - Max connections: 100

## Step 9: Post-Deployment Checklist

- [ ] Database migrations completed
- [ ] All environment variables set
- [ ] SSL certificate active
- [ ] DNS records configured
- [ ] Backups scheduled
- [ ] Monitoring tools active
- [ ] Error tracking configured
- [ ] Performance metrics tracked
- [ ] Security headers enabled
- [ ] Rate limiting active
- [ ] Email service configured
- [ ] OAuth providers tested
- [ ] File upload tested
- [ ] All user roles tested
- [ ] Mobile responsiveness verified
- [ ] Cross-browser testing done
- [ ] Load testing completed
- [ ] Documentation updated

## Step 10: Maintenance

### Regular Tasks

**Daily:**
- Monitor error logs
- Check system health
- Review user feedback

**Weekly:**
- Review performance metrics
- Check backup integrity
- Update dependencies (security patches)

**Monthly:**
- Full backup verification
- Security audit
- Performance optimization review
- Update documentation

### Scaling Strategy

**Phase 1 (0-1000 users):**
- Single Supabase instance
- Basic tier hosting
- Manual monitoring

**Phase 2 (1000-10,000 users):**
- Upgrade Supabase tier
- Add read replicas
- Implement CDN
- Automated monitoring

**Phase 3 (10,000+ users):**
- Database sharding
- Load balancing
- Microservices architecture
- Advanced caching

## Rollback Procedure

If deployment fails:

1. **Immediate Rollback:**
   ```bash
   # Vercel
   vercel rollback
   
   # Netlify
   netlify deploy --prod --alias previous-deployment
   ```

2. **Database Rollback:**
   ```bash
   # Restore from backup
   pg_restore -h db.supabase.co -U postgres -d postgres backup.dump
   ```

3. **Communication:**
   - Notify users via status page
   - Post incident report
   - Schedule maintenance window

## Support & Resources

- **Documentation:** `/docs`
- **API Reference:** `/database/API-ENDPOINTS.md`
- **Database Schema:** `/database/schema.sql`
- **Support Email:** support@prashiskshan.edu.in
- **Status Page:** status.prashiskshan.edu.in

## Cost Estimation

### Monthly Costs (approximate)

**Development:**
- Supabase Free Tier: $0
- Vercel Hobby: $0
- **Total: $0/month**

**Production (Small Scale <1000 users):**
- Supabase Pro: $25/month
- Vercel Pro: $20/month
- Domain: $12/year
- **Total: ~$46/month**

**Production (Medium Scale <10,000 users):**
- Supabase Team: $599/month
- Vercel Enterprise: $150/month
- CDN: $50/month
- Monitoring: $50/month
- **Total: ~$850/month**

## Compliance

### Data Protection
- GDPR compliant data handling
- User consent management
- Right to deletion
- Data export functionality

### NEP 2020 Compliance
- Credit system aligned with NEP guidelines
- Skill-based curriculum support
- Industry-academia collaboration framework
- Experiential learning tracking

---

**Deployment completed successfully? Test all features before announcing to users!**