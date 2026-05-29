# API Documentation

## Service Architecture

All API calls are handled through service modules in `src/services/`.

## Authentication Service

### `authService.register(email, password, displayName)`

Register a new user.

```javascript
const user = await authService.register(
  'user@example.com',
  'password123',
  'John Doe'
)
// Returns: { uid, email, displayName, photoURL }
```

### `authService.login(email, password)`

Login user with credentials.

```javascript
const user = await authService.login('user@example.com', 'password123')
// Returns: { uid, email, displayName, photoURL }
```

### `authService.logout()`

Logout current user.

```javascript
await authService.logout()
```

### `authService.getCurrentUser()`

Get authenticated user from context.

```javascript
const user = authService.getCurrentUser()
```

## Booking Service

### `bookingService.createBooking(userId, bookingData)`

Create a new booking.

```javascript
const bookingId = await bookingService.createBooking(user.uid, {
  problem: 'not-cooling',
  fridgeType: 'domestic',
  brand: 'LG',
  customerName: 'John Doe',
  customerEmail: 'john@example.com',
  customerPhone: '+26481234567',
  customerAddress: 'Klein Windhoek',
  preferredDate: new Date(),
  preferredTime: '10:00 AM',
  estimatedPrice: 500,
})
// Returns: booking ID string
```

### `bookingService.getUserBookings(userId)`

Get all bookings for a user.

```javascript
const bookings = await bookingService.getUserBookings(user.uid)
// Returns: Array of booking objects
```

### `bookingService.getBookingById(bookingId)`

Get a specific booking by ID.

```javascript
const booking = await bookingService.getBookingById('booking-123')
// Returns: Booking object or null
```

### `bookingService.updateBookingStatus(bookingId, status, additionalData)`

Update booking status.

```javascript
await bookingService.updateBookingStatus(
  'booking-123',
  'in_progress',
  { notes: 'Started repair' }
)
```

Statuses: `pending`, `assigned`, `in_progress`, `completed`, `cancelled`

### `bookingService.getPendingBookings()`

Get all pending bookings (admin only).

```javascript
const pending = await bookingService.getPendingBookings()
// Returns: Array of pending bookings
```

### `bookingService.assignTechnician(bookingId, technicianId, technicianName)`

Assign booking to technician.

```javascript
await bookingService.assignTechnician(
  'booking-123',
  'tech-456',
  'John Smith'
)
```

### `bookingService.cancelBooking(bookingId, reason)`

Cancel a booking.

```javascript
await bookingService.cancelBooking('booking-123', 'Customer request')
```

## Storage Service

### `storageService.uploadFile(file, path)`

Upload single file to Firebase Storage.

```javascript
const url = await storageService.uploadFile(
  file,
  'photos/booking-123/image.jpg'
)
// Returns: Download URL
```

### `storageService.uploadFiles(files, basePath)`

Upload multiple files.

```javascript
const urls = await storageService.uploadFiles(
  [file1, file2, file3],
  'photos/booking-123'
)
// Returns: Array of download URLs
```

### `storageService.deleteFile(filePath)`

Delete file from storage.

```javascript
await storageService.deleteFile('photos/booking-123/image.jpg')
```

## Error Handler Service

### `errorHandler.logError(error, context)`

Log error with context.

```javascript
import { errorHandler } from '@/services/errorHandler'

try {
  // Some operation
} catch (error) {
  errorHandler.logError(error, { 
    component: 'BookingForm',
    action: 'submitForm'
  })
}
```

### `errorHandler.getUserMessage(error)`

Get user-friendly error message.

```javascript
const message = errorHandler.getUserMessage(error)
toast.error(message)
```

## Custom Hooks

### `useAuth()`

Access authentication context.

```javascript
import { useAuth } from '@/hooks/useAuth'

const { user, dispatch, loading } = useAuth()
```

### `useBooking()`

Access booking context.

```javascript
import { useBooking } from '@/hooks/useBookings'

const { currentBooking, dispatch } = useBooking()
```

### `useErrorHandler()`

Access error handling utilities.

```javascript
import { useErrorHandler } from '@/services/errorHandler'

const { logError, getUserMessage } = useErrorHandler()
```

## Validation Utilities

### Schemas

```javascript
import { 
  loginSchema, 
  registerSchema, 
  bookingSchema 
} from '@/utils/validation'

const result = loginSchema.safeParse({
  email: 'user@example.com',
  password: 'password123',
})

if (!result.success) {
  console.error(result.error.flatten())
}
```

## Formatters

### `formatDate(date)`

Format date to locale string.

```javascript
formatDate(new Date()) // "24 March 2026"
```

### `formatCurrency(amount)`

Format amount as NAD currency.

```javascript
formatCurrency(500) // "N$500.00"
```

### `formatBookingStatus(status)`

Format status for display.

```javascript
formatBookingStatus('in_progress') // "In Progress"
```

### `getStatusColor(status)`

Get Tailwind color classes for status badge.

```javascript
// Returns: "bg-purple-100 text-purple-800"
```

---

## Error Handling Patterns

### In Components

```javascript
try {
  await bookingService.createBooking(user.uid, data)
  toast.success('Booking created!')
  navigate('/dashboard')
} catch (error) {
  logError(error, { component: 'BookingForm' })
  toast.error(getUserMessage(error))
}
```

### In Services

```javascript
export const myService = {
  doSomething: async (data) => {
    try {
      // API call
    } catch (error) {
      throw new Error(`Operation failed: ${error.message}`)
    }
  }
}
```

---

For more information, see [Development Guide](./DEVELOPMENT.md)
