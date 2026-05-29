# Deployment Guide

## Vercel Deployment (Recommended for Frontend)

### Setup

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Connect Repository**
   - Import your GitHub repository
   - Select project root: `/`

3. **Configure Environment Variables**
   - Go to Settings → Environment Variables
   - Add all variables from `.env.local`:
     ```
     VITE_FIREBASE_API_KEY
     VITE_FIREBASE_AUTH_DOMAIN
     VITE_FIREBASE_PROJECT_ID
     VITE_FIREBASE_STORAGE_BUCKET
     VITE_FIREBASE_MESSAGING_SENDER_ID
     VITE_FIREBASE_APP_ID
     ```

4. **Deploy**
   ```bash
   # Automatic on push to main
   # Or manual:
   npm install -g vercel
   vercel
   ```

### Production Settings

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "env": [
    "VITE_FIREBASE_API_KEY",
    "VITE_FIREBASE_AUTH_DOMAIN",
    "VITE_FIREBASE_PROJECT_ID",
    "VITE_FIREBASE_STORAGE_BUCKET",
    "VITE_FIREBASE_MESSAGING_SENDER_ID",
    "VITE_FIREBASE_APP_ID"
  ]
}
```

## Firebase Hosting

### Setup

1. **Initialize Firebase CLI**
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init hosting
   ```

2. **Configure `firebase.json`**
   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### Custom Domain

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Verify domain ownership
4. Update DNS records

## Docker Deployment

### Local Testing

```bash
# Build Docker image
docker build -t fridgefix .

# Run container
docker run -p 3000:3000 fridgefix

# Or use docker-compose
docker-compose up
```

### Docker Hub

```bash
# Login
docker login

# Tag image
docker tag fridgefix:latest yourusername/fridgefix:latest

# Push
docker push yourusername/fridgefix:latest
```

### Deploy to Cloud Services

#### Google Cloud Run

```bash
gcloud builds submit --tag gcr.io/PROJECT_ID/fridgefix
gcloud run deploy fridgefix --image gcr.io/PROJECT_ID/fridgefix --platform managed --region us-central1
```

#### AWS ECS

```bash
# Push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 123456789.dkr.ecr.us-east-1.amazonaws.com
docker tag fridgefix:latest 123456789.dkr.ecr.us-east-1.amazonaws.com/fridgefix:latest
docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/fridgefix:latest
```

## GitHub Actions CI/CD

### Setup Secrets

In GitHub repo → Settings → Secrets and variables → Actions:

```
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_vercel_org_id
VERCEL_PROJECT_ID=your_vercel_project_id
FIREBASE_TOKEN=your_firebase_token
CODECOV_TOKEN=your_codecov_token
```

Get Firebase token:
```bash
firebase login:ci
```

### Workflow Status

Check workflow status: **Actions** tab in GitHub

## Environment-Specific Configuration

### Development
```bash
npm run dev
# Runs on http://localhost:5173
```

### Staging (Preview)
```bash
npm run build
vercel --prod  # Uses staging environment
```

### Production
```bash
npm run build
npm run preview  # Test production build locally

# Deploy via Vercel
# Automatic on push to main
```

## Monitoring & Analytics

### Vercel Analytics
- Automatic performance monitoring
- Real User Monitoring (RUM)
- Web Vitals tracking

### Firebase Analytics
- User engagement metrics
- Custom events
- Crash reporting

### Sentry (Error Tracking)
```bash
npm install @sentry/react
```

Configure in main.jsx:
```javascript
import * as Sentry from "@sentry/react"

Sentry.init({
  dsn: process.env.VITE_SENTRY_DSN,
  environment: process.env.NODE_ENV,
})
```

## Rollback

### Vercel
- Go to Deployments
- Click the deployment you want
- Click "Promote to Production"

### Firebase
- Go to Hosting → Releases
- Click the release to restore
- Click "Rollback"

## Domain Configuration

### DNS Records

```
@ (root)   A       YOUR_IP_ADDRESS
www        CNAME   your-vercel-domain.vercel.app
api        CNAME   your-api-domain.vercel.app
```

### SSL Certificate

Automatically issued by Vercel/Firebase. No action needed.

## Performance Optimization

### Build Optimization
```bash
npm run build  # Creates optimized dist/

# Check bundle size
npm install -D @vitejs/plugin-visualizer
```

### Image Optimization
- Use WebP format
- Lazy load images
- Responsive images

### Caching Strategy

```javascript
// In Vercel
{
  "headers": [
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Check logs in deploy platform, verify env vars |
| Blank page | Check browser console, ensure public folder exists |
| Env vars not working | Verify in build system, rebuild after adding |
| CSS not loading | Check Tailwind configuration, rebuild |
| Images not showing | Verify paths are relative, check public folder |

---

For more help:
- [Vercel Docs](https://vercel.com/docs)
- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
- [Docker Docs](https://docs.docker.com/)
