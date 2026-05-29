# FridgeFix - Fast Appliance Repair Booking

Professional fridge and appliance repair service in Namibia. Book online in 60 seconds and get qua;ity service.

**Live Demo**: Coming soon  
**Documentation**: See `/docs` folder

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Firebase account (free tier)

### Installation

```bash
# Clone repository
git clone <your-repo>
cd fridgefix-namibia

# Install dependencies
npm install

# Setup Firebase (see docs/FIREBASE.md)
cp .env.example .env.local
# Edit .env.local with your Firebase credentials

# Start development server
npm run dev
```

App opens at: **http://localhost:5173**

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Route pages
├── context/            # React Context (Auth, Booking, Theme)
├── services/           # Business logic & APIs
├── hooks/              # Custom React hooks
├── utils/              # Helpers (validation, formatters)
└── __tests__/          # Unit & integration tests

docs/
├── DEVELOPMENT.md      # Developer guide
├── FIREBASE.md         # Firebase setup
├── API.md              # API documentation
├── DEPLOYMENT.md       # Deployment guide
└── ACCESSIBILITY.md    # A11y best practices
```

## ✨ Features

### Core Features
- ✅ **Multi-step Booking Form** - Intuitive 4-step process
- ✅ **Photo Upload** - Drag & drop repair photos
- ✅ **Real-time Status** - Track booking status
- ✅ **User Dashboard** - View & manage bookings
- ✅ **Admin Panel** - Manage repairs & technicians
- ✅ **Mobile Responsive** - Works on all devices

### Advanced Features (In Progress)
- 🔄 **Email/SMS Notifications** - Automatic updates
- 🌐 **Google Maps Integration** - Show repair locations
- 📅 **Technician Calendar** - Check availability
- ⭐ **Customer Reviews** - Rate & review repairs
- 🔌 **Real-time WebSockets** - Live booking updates
- 🌙 **Dark Mode** - Comfortable night viewing
- ♿ **Accessibility (A11y)** - WCAG 2.1 compliant
- 📱 **PWA Support** - Install as app

## 🛠️ Development

### Code Quality

```bash
# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format

# Type checking
npm run type-check

# All checks
npm run lint && npm run format && npm run type-check
```

### Testing

```bash
# Run all tests
npm test

# Watch mode
npm test -- --watch

# Coverage report
npm run test:coverage

# UI mode
npm run test:ui
```

### Storybook (Component Development)

```bash
npm run storybook
# Opens http://localhost:6006
```

## 🚢 Deployment

### Quick Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to Firebase

```bash
npm run build
firebase deploy
```

### Docker Deployment

```bash
# Build image
docker build -t fridgefix .

# Run container
docker run -p 3000:3000 fridgefix

# Or with docker-compose
docker-compose up
```

## 📚 Documentation

- **[Development Guide](./docs/DEVELOPMENT.md)** - Architecture & best practices
- **[Firebase Setup](./docs/FIREBASE.md)** - Firebase configuration
- **[API Documentation](./docs/API.md)** - Service & hook APIs
- **[Deployment Guide](./docs/DEPLOYMENT.md)** - Production deployment
- **[Accessibility Guide](./docs/ACCESSIBILITY.md)** - A11y best practices

## 🔐 Security

- Firebase authentication
- Secure Firestore rules
- Input validation with Zod
- Error boundary protection
- HTTPS enforced in production

## 📊 Tech Stack

**Frontend**
- React 18
- Vite
- Tailwind CSS
- React Router v6

**Backend & Services**
- Firebase Authentication
- Firestore Database
- Cloud Storage
- Cloud Functions (optional)

**Developer Tools**
- ESL int & Prettier
- Vitest & React Testing Library
- Storybook
- GitHub Actions CI/CD
- Docker

**Monitoring**
- Firebase Analytics
- Sentry (errors - optional)
- Vercel Analytics

## 📱 Routes

| Route | Purpose | Auth |
|-------|---------|------|
| `/` | Home page | Public |
| `/booking` | Create booking | Required |
| `/dashboard` | My bookings | Required |
| `/admin` | Admin panel | Admin only |
| `/login` | Login/Register | Public |
| `/privacy-policy` | Privacy policy | Public |

## 🔄 State Management

### Authentication Context
- User state
- Login/Logout
- Protected routes

### Booking Context
- Current booking data
- Booking list
- Error handling

### Theme Context
- Dark/Light mode toggle
- System preference detection

## 🧪 Test Account

For testing features:
```
Email: demo@test.com
Password: demo123
```

## 📈 Performance

- **Lazy-loaded routes** - Faster initial load
- **Code splitting** - Smaller bundles
- **Image optimization** - WebP format
- **Caching strategy** - Service Worker
- **CDN delivery** - Via Vercel/Firebase

### Core Web Vitals
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

## 🐛 Troubleshooting

### Common Issues

**"Blank white screen"**
- Check browser console for errors
- Verify Firebase config in `.env.local`
- Clear cache & hard reload (Ctrl+Shift+R)

**"Module not found"**
- Check import paths
- Ensure all dependencies installed: `npm install`
- Clear node_modules & reinstall

**"Tests failing"**
- Clear cache: `npm test -- --clearCache`
- Ensure all packages installed

**"Build fails"**
- Check logs for errors
- Verify all env variables set in deployment platform
- Rebuild after adding new env vars

## 👥 Contributing

1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open Pull Request
5. All checks must pass before merge

## 📝 License

MIT License - feel free to use for personal or commercial projects

## 📞 Support

- **Email**: info@fridgefix.com.na
- **Phone**: +264 61 XXX XXXX
- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions

## 🙏 Acknowledgments

- Built with React & Tailwind CSS
- Powered by Firebase
- Icons by Lucide React
- Deployed on Vercel/Firebase

---

**Last Updated**: March 2026  
**Version**: 1.0.0  
Made with ❤️ for Windhoek, Namibia
