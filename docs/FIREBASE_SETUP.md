# Firebase Setup Guide - Step by Step

This guide will walk you through configuring your FridgeFix app with real Firebase credentials.

## 1. Create Firebase Project

### Step 1.1: Go to Firebase Console
- Visit [Firebase Console](https://console.firebase.google.com/)
- Click **"Create a project"** (or **"Add project"** if you already have projects)

### Step 1.2: Project Configuration
- **Project name**: `fridgefix-namibia`
- **Enable Google Analytics**: Uncheck (optional, we don't need it for MVP)
- Click **"Create project"**

Wait 1-2 minutes for Firebase to initialize...

### Step 1.3: Get Project Credentials
Once the project is ready:
1. Click the **Settings icon** ⚙️ (top-left, next to "Project Overview")
2. Select **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click **"Web"** icon (or **"</>"** symbol) to add a web app
5. App name: `fridgefix-web`
6. Check "Also set up Firebase Hosting" (optional)
7. Click **"Register app"**
8. **COPY THE ENTIRE CONFIG OBJECT** - you'll need this next

**Example config looks like:**
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyCEsZ_hEVP3q8d_1234567890abcdef",
  authDomain: "fridgefix-namibia.firebaseapp.com",
  projectId: "fridgefix-namibia",
  storageBucket: "fridgefix-namibia.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

---

## 2. Update Environment Variables

### Step 2.1: Configure `.env.local`
Create/update `c:\Users\boyma\Desktop\fridgefix-namibia\.env.local` with your Firebase config:

```bash
# Firebase Configuration
VITE_FIREBASE_API_KEY=AIzaSyCEsZ_hEVP3q8d_1234567890abcdef
VITE_FIREBASE_AUTH_DOMAIN=fridgefix-namibia.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=fridgefix-namibia
VITE_FIREBASE_STORAGE_BUCKET=fridgefix-namibia.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890

# Optional: Google Maps API Key (for future integration)
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

**IMPORTANT**: 
- Replace all values with YOUR actual Firebase project credentials
- `.env.local` is already in `.gitignore` - never commit it!
- Keep this file secure and don't share it publicly

---

## 3. Setup Authentication

### Step 3.1: Enable Email/Password Auth
In Firebase Console:
1. Go to **Authentication** → **Sign-in method**
2. Click **"Email/Password"**
3. Toggle **"Enable"** ON
4. Click **"Save"**

### Step 3.2: Enable Google Sign-in (Optional)
1. In **Sign-in method**, click **"Google"**
2. Toggle **"Enable"** ON
3. Add project support email
4. Click **"Save"**

---

## 4. Setup Firestore Database

### Step 4.1: Create Firestore Database
1. Go to **Firestore Database**
2. Click **"Create database"**
3. **Security rules**: Select **"Start in test mode"** (for development)
4. **Location**: Select region closest to Namibia (e.g., `eu-west1` for Europe proximity)
5. Click **"Create"**

### Step 4.2: Update Firestore Security Rules
Once database is created:

1. Go to **Firestore Database** → **Rules** tab
2. **Replace all** existing rules with this:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own profile
    match /users/{uid} {
      allow read, write: if request.auth.uid == uid;
      allow read: if request.auth.uid != null; // Users can see other profiles (public)
    }

    // Bookings - users can read/write their own
    match /bookings/{bookingId} {
      allow create: if request.auth.uid != null && request.auth.uid == request.resource.data.userId;
      allow read, write: if request.auth.uid == resource.data.userId;
      allow list: if request.auth.uid != null && request.auth.uid == resource.data.userId;
      
      // Admins can read all bookings and technicians can read assigned ones
      allow read: if request.auth.token.admin == true || request.auth.uid == resource.data.technicianId;
      allow write: if request.auth.token.admin == true;
    }

    // Reviews - public read, users can write their own
    match /reviews/{reviewId} {
      allow read: if true;
      allow create: if request.auth.uid != null && request.auth.uid == request.resource.data.userId;
      allow write: if request.auth.uid == resource.data.userId;
      allow delete: if request.auth.token.admin == true || request.auth.uid == resource.data.userId;
    }

    // Technicians - public read
    match /technicians/{technicianId} {
      allow read: if true;
      allow write: if request.auth.token.admin == true;
    }
  }
}
```

3. Click **"Publish"**

---

## 5. Setup Cloud Storage for Photos

### Step 5.1: Create Storage Bucket
1. Go to **Cloud Storage**
2. Click **"Create bucket"**
3. Bucket name: `fridgefix-namibia-photos`
4. Location: Same as Firestore (e.g., `eu-west1`)
5. Storage class: **Standard**
6. Access control: **Uniform**
7. Click **"Create"**

### Step 5.2: Update Storage Rules
Once bucket is created:

1. Go to **Cloud Storage** → **Rules** tab
2. Replace with this:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Each user can upload/read their own photos
    match /photos/{userId}/{fileName} {
      allow read, write: if request.auth.uid == userId;
    }
    
    // Public reviews photos
    match /reviews/{reviewId}/{fileName} {
      allow read: if true;
      allow write: if request.auth.uid != null;
    }
  }
}
```

3. Click **"Publish"**

---

## 6. Verify Setup is Working

### Step 6.1: Start Dev Server
```bash
npm run dev
```

### Step 6.2: Test Registration
1. Open http://localhost:5173/
2. Go to **Login** page
3. Create a new account with your email
4. Check Firebase Console → **Authentication** to see your user

### Step 6.3: Verify Firestore
1. After login, create a booking
2. Go to Firebase Console → **Firestore Database**
3. Should see new documents in `bookings` and `users` collections

### Step 6.4: Verify Cloud Storage
1. Upload a photo during booking
2. Go to Firebase Console → **Cloud Storage**
3. Should see photos in `photos/{userId}/` folder

---

## 7. Project-Specific Setup Tips

### Setting Admin Users (for staff access)
To make a user an admin:

1. Go to Firebase Console → **Authentication**
2. Find the user email
3. Click the user email to open details
4. *Note: Custom claims need to be set via Cloud Functions or other backend*

**For now**, use this workaround:
- Go to **Firestore Database** → **users** collection
- Find your user document
- Add a field: `isAdmin: true`

### Deployment Notes
When deploying to production:

1. **Switch from Test mode to Production**:
   - Go to Firestore Rules
   - Update rules to be more restrictive
   - We've already provided production-ready rules above

2. **Set Environment Variables in Deployment**:
   - **Vercel**: Settings → Environment Variables → add all `VITE_FIREBASE_*` vars
   - **Firebase Hosting**: `firebase deploy` reads from your local `.env`
   - **Docker**: Pass as build args or `docker-compose.yml`

---

## 8. Troubleshooting

### App won't load: "firebaseConfig is invalid"
**Problem**: Firebase config not being read from `.env`
**Solution**: 
- Verify `.env.local` exists with correct variables
- Make sure variable names start with `VITE_` (Vite requirement)
- Restart dev server: `npm run dev`

### "Permission denied" errors when creating booking
**Problem**: Firestore security rules blocking access
**Solution**:
- Check Firestore Rules tab - make sure rules were published
- Verify user is authenticated (check Firebase Console → Auth)
- Check rules match your data structure

### Photos not uploading
**Problem**: Cloud Storage rules blocking upload
**Solution**:
- Check Storage Rules tab
- Verify bucket name in code matches Firebase bucket
- Ensure user is authenticated before upload

### "Too many requests" login errors
**Problem**: Rate limiting from Firebase
**Solution**:
- This is actually Firebase protecting against brute force
- Wait a few minutes and try again
- In production, users see helpful UI message

---

## 9. Next Steps

After Firebase setup is working:

1. **Real-time Updates** (Phase 2B):
   - Add WebSocket listeners for live booking status
   - Implement push notifications

2. **Advanced Features** (Phase 2A):
   - Google Maps integration
   - Technician availability calendar
   - Customer reviews system

3. **Production Deployment**:
   - Test in production mode rules
   - Deploy to Vercel + Firebase Hosting
   - Setup monitoring and error tracking

---

## 10. Quick Reference

| Item | Value |
|------|-------|
| Firebase Console | https://console.firebase.google.com/ |
| Firestore Database | Authentication, Firestore, Cloud Storage |
| Test User (default) | demo@test.com / 123456 |
| Dev Server | http://localhost:5173/ |
| Admin Panel | http://localhost:5173/admin (requires `isAdmin: true`) |
| Environment File | `.env.local` (never commit) |

---

## 11. Security Best Practices

✅ **DO:**
- Keep `VITE_FIREBASE_API_KEY` secret
- Enable 2FA on Firebase account
- Use production rules before going live
- Monitor Authentication and Firestore usage
- Regular backups of Firestore data

❌ **DON'T:**
- Commit `.env.local` to Git
- Expose API keys in frontend code (they're meant to be public, but keep secure)
- Use test mode rules in production
- Grant admin access unnecessarily
0000