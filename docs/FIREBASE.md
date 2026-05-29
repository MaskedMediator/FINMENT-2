# Firebase Setup & Integration Guide

## Initial Setup

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name: `fridgefix-namibia`
4. Disable Google Analytics (optional)
5. Click "Create project"

### 2. Enable Authentication

In Firebase Console:
1. Go to **Authentication** → **Sign-in method**
2. Enable **Email/Password**
3. Enable **Google Sign-in** (optional)

### 3. Create Firestore Database

1. Go to **Firestore Database**
2. Click **Create database**
3. Select **Production mode**
4. Choose location: `us-east1` (or nearest to Namibia)
5. Click **Create**

### 4. Set Firestore Rules

Replace default rules with (in Firestore → Rules):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own user data
    match /users/{uid} {
      allow read, write: if request.auth.uid == uid;
    }

    // Users can read/write their own bookings
    match /bookings/{doc=**} {
      allow read, write: if request.auth.uid == resource.data.userId;
      // Admins can read all bookings
      allow read: if request.auth.token.admin == true;
      allow write: if request.auth.token.admin == true;
    }

    // Public reviews (read-only for clients)
    match /reviews/{doc=**} {
      allow read: if true;
      allow write: if request.auth.uid == resource.data.userId;
    }
  }
}
```

### 5. Setup Cloud Storage

1. Go to **Storage**
2. Click **Create bucket**
3. Name: `fridgefix-namibia-photos`
4. Choose region
5. Set Storage Rules:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /photos/{userId}/{fileName} {
      allow read, write: if request.auth.uid == userId;
    }
  }
}
```

### 6. Get Firebase Config

Go to **Project Settings** → **Your apps** → **Web**:

Copy config and update `.env.local`:

```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Firestore Collections

### users

```javascript
{
  uid: string,
  email: string,
  displayName: string,
  photoURL: string,
  phone: string,
  address: string,
  createdAt: timestamp,
  updatedAt: timestamp,
  isAdmin: boolean,
  preferences: {
    notifications: boolean,
    newsletter: boolean,
  }
}
```

### bookings

```javascript
{
  id: string,
  userId: string,
  problem: string,
  fridgeType: string,
  brand: string,
  model: string,
  age: string,
  photos: [url strings],
  customerName: string,
  customerPhone: string,
  customerEmail: string,
  customerAddress: string,
  preferredDate: timestamp,
  preferredTime: string,
  estimatedPrice: number,
  status: 'pending' | 'assigned' | 'in_progress' | 'completed' | 'cancelled',
  technicianId: string,
  technicianName: string,
  notes: string,
  createdAt: timestamp,
  updatedAt: timestamp,
  completedAt: timestamp,
  cancellationReason: string,
}
```

### technicians

```javascript
{
  id: string,
  name: string,
  email: string,
  phone: string,
  specialties: [strings],
  rating: number,
  completedJobs: number,
  availability: {
    [date]: [time slots]
  },
  createdAt: timestamp,
}
```

### reviews

```javascript
{
  id: string,
  bookingId: string,
  userId: string,
  technicianId: string,
  rating: number,
  comment: string,
  createdAt: timestamp,
}
```

## Service Integration

### Updated authService.js

Once Firebase is ready, replace demo mode with:

```javascript
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from './firebase'

export const authService = {
  register: async (email, password, displayName) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    return {
      uid: user.uid,
      email: user.email,
      displayName,
    }
  },

  login: async (email, password) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    }
  },

  logout: async () => {
    await signOut(auth)
  },
}
```

## Testing Firebase Connection

```javascript
// Test connection
import { initializeApp } from 'firebase/app'
import { getFirestore, getDocs, collection } from 'firebase/firestore'

const testConnection = async () => {
  const db = getFirestore()
  try {
    const snapshot = await getDocs(collection(db, 'users'))
    console.log('✓ Firestore connected:', snapshot.size, 'users')
  } catch (error) {
    console.error('✗ Firestore error:', error.message)
  }
}

testConnection()
```

## Emulator (Local Development)

### Setup Local Emulator

```bash
npm install -g firebase-tools
firebase init emulators
firebase emulators:start
```

Update `.env.local`:

```bash
VITE_FIREBASE_USE_EMULATOR=true
```

---

For production deployment, see [Deployment Guide](./DEPLOYMENT.md)
