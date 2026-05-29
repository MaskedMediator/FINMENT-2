# FINMENT Website - Complete Codebase

## Project Overview
Professional Appliance Repair Service website built with React, Vite, and Tailwind CSS.

---

## File Structure
```
FINMENT/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ErrorBoundary.jsx
│   │   └── LoadingSpinner.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── PrivacyPolicy.jsx
│       └── NotFound.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── vercel.json
```

---

## Core Files

### 1. package.json
```json
{
  "name": "finment-investment",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext .js,.jsx",
    "lint:fix": "eslint src --ext .js,.jsx --fix",
    "format": "prettier --write \"src/**/*.{js,jsx,css}\""
  },
  "dependencies": {
    "lucide-react": "^0.373.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.3"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.56.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "postcss": "^8.4.32",
    "prettier": "^3.1.1",
    "tailwindcss": "^3.4.1",
    "vite": "^5.0.8"
  }
}
```

### 2. index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Professional plumbing and appliance repair services in Windhoek, Namibia. Fast, reliable, and affordable solutions for fridge, AC, geyser, and more." />
    <meta name="keywords" content="appliance repair, fridge repair, plumbing, AC repair, geyser repair, Windhoek, Namibia" />
    <meta name="author" content="FINMENT" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="FINMENT - Professional Appliance Repair Service" />
    <meta property="og:description" content="Expert technicians providing reliable plumbing and appliance repair services in Namibia." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://finment.na" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="FINMENT - Professional Appliance Repair Service" />
    <meta name="twitter:description" content="Expert technicians providing reliable plumbing and appliance repair services in Namibia." />
    <title>FINMENT - Professional Appliance Repair Service in Namibia</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### 3. vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
```

### 4. tailwind.config.js
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#059669',
        accent: '#dc2626',
        neutral: '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### 5. src/main.jsx
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 6. src/App.jsx
```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}
```

### 7. src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family:
    'Inter',
    system-ui,
    -apple-system,
    sans-serif;
  @apply text-gray-900 bg-gradient-to-br from-blue-50 via-slate-50 to-emerald-50;
  background-attachment: fixed;
}

@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-gradient-to-r from-primary to-blue-700 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition duration-300 transform active:scale-95 active:shadow-md active:duration-75;
  }

  .btn-secondary {
    @apply px-6 py-3 bg-gradient-to-r from-secondary to-emerald-700 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition duration-300 transform active:scale-95 active:shadow-md active:duration-75;
  }

  .btn-outline {
    @apply px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white hover:shadow-lg transition duration-300 transform hover:scale-105 active:scale-95 active:shadow-md active:duration-75;
  }

  .input-field {
    @apply w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition duration-300 hover:border-primary;
  }

  .section-container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16;
  }

  .card-hover {
    @apply transition-all duration-300 hover:shadow-2xl hover:scale-105 transform;
  }

  .gradient-text {
    @apply bg-gradient-to-r from-primary via-blue-600 to-secondary bg-clip-text text-transparent;
  }
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(10px);
  }
}
```

---

## React Components

### 8. src/components/Navbar.jsx
```javascript
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-medium sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110 transform duration-300">
              <Zap className="text-white font-bold" size={20} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:block group-hover:scale-105 transition transform duration-300">
              FINMENT
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/privacy-policy"
              className="text-gray-700 hover:text-primary transition relative group"
            >
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a 
              href="tel:+264812095555" 
              className="flex items-center space-x-1 px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
            >
              <span>📞 +264 812 0955</span>
            </a>
          </div>

          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-gradient-to-b from-gray-50 to-white rounded-2xl mt-2">
            <Link
              to="/"
              className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white rounded-lg transition font-medium"
            >
              Home
            </Link>
            <Link
              to="/privacy-policy"
              className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white rounded-lg transition font-medium"
            >
              Privacy Policy
            </Link>
            <a
              href="tel:+264812095555"
              className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white rounded-lg transition font-medium"
            >
              📞 +264 812 0955
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
```

### 9. src/components/Footer.jsx
```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="animate-fadeInUp">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <h3 className="text-white text-lg font-bold">FINMENT</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional plumbing and appliance repair solutions for Namibia. Your trusted repair partner for all your home appliance needs.
            </p>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
              <span>Quick Links</span>
              <ArrowRight size={16} />
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition relative group">
                  <span className="flex items-center space-x-2">
                    <span>Home</span>
                    <span className="inline-block w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 group-hover:w-4 transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-white transition relative group"
                >
                  <span className="flex items-center space-x-2">
                    <span>Privacy Policy</span>
                    <span className="inline-block w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 group-hover:w-4 transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition group">
                <div className="p-2 bg-red-500 bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition">
                  <Phone size={16} />
                </div>
                <a href="tel:+264812095555" className="hover:text-red-400">+264 812 0955</a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition group">
                <div className="p-2 bg-emerald-500 bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition">
                  <Mail size={16} />
                </div>
                <span>info@finment.com.na</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition group">
                <div className="p-2 bg-purple-500 bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition">
                  <MapPin size={16} />
                </div>
                <span>Windhoek, Namibia</span>
              </li>
            </ul>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-3 bg-blue-500 bg-opacity-20 rounded-full text-blue-300 hover:text-white hover:bg-opacity-30 transition transform hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-blue-400 bg-opacity-20 rounded-full text-blue-300 hover:text-white hover:bg-opacity-30 transition transform hover:scale-110"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-pink-500 bg-opacity-20 rounded-full text-pink-300 hover:text-white hover:bg-opacity-30 transition transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} FINMENT Namibia. All rights reserved.</p>
          <p>Made by Martin Kondjila</p>
        </div>
      </div>
    </footer>
  );
}
```

### 10. src/components/ErrorBoundary.jsx
```javascript
import React from 'react';
import { AlertTriangle } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(_error, errorInfo) {
    console.error('Error Boundary caught an error:', _error, errorInfo);
    this.setState({
      error: _error,
      errorInfo,
    });
  }

  resetError = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
            <p className="text-gray-600 mb-6">
              We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
            </p>
            <div className="space-y-3">
              <button onClick={this.resetError} className="w-full btn-primary">
                Try Again
              </button>
              <a href="/" className="block btn-outline">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

### 11. src/components/LoadingSpinner.jsx
```javascript
import React from 'react';

export default function LoadingSpinner({ fullScreen = false }) {
  const content = (
    <div className="flex justify-center items-center space-x-2">
      <div className="w-3 h-3 bg-primary rounded-full animate-spin" />
      <span className="text-gray-600">Loading...</span>
    </div>
  );

  if (fullScreen) {
    return <div className="min-h-screen flex items-center justify-center">{content}</div>;
  }

  return content;
}
```

---

## Pages

### 12. src/pages/Home.jsx
(See attachment - contains hero, services, business hours, gallery, and CTA sections)

### 13. src/pages/PrivacyPolicy.jsx
```javascript
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="section-container max-w-3xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
          <p>
            FINMENT INVESTMENT operates the FINMENT website and application. This page informs you
            of our policies regarding collection and use of personal data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Contact</h2>
          <p>Email: info@finment.com.na</p>
        </section>
      </div>
    </div>
  );
}
```

### 14. src/pages/NotFound.jsx
```javascript
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
```

---

## Setup Instructions

To clone this project:

```bash
# 1. Clone or copy the project folder
cd FINMENT

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Build for production
npm run build
```

**Live URL:** http://localhost:5173/

---

## Key Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Service showcase with 6 repair services
- ✅ Business hours display
- ✅ Before/After gallery
- ✅ Contact integration (phone numbers)
- ✅ Error boundary for error handling
- ✅ SEO optimized meta tags
- ✅ Smooth animations and transitions
- ✅ Dark mode footer with social links
- ✅ Privacy policy page

---

## Technologies Used
- React 18.3.1
- React Router DOM 6.22.3
- Tailwind CSS 3.4.1
- Vite 5.0.8
- Lucide React (icons)

---

**Created:** May 29, 2026
**Author:** Martin Kondjila
