# Development & Architecture Guide

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── BookingForm/     # Multi-step booking form
│   ├── ErrorBoundary.jsx # Error boundary wrapper
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ...
├── pages/              # Page components (routes)
├── context/            # React Context for state management
│   ├── AuthContext.jsx
│   └── BookingContext.jsx
├── services/           # Business logic & API services
│   ├── authService.js
│   ├── bookingService.js
│   ├── errorHandler.js
│   └── firebase.js
├── hooks/              # Custom React hooks
├── utils/              # Helper functions
│   ├── constants.js
│   ├── formatters.js
│   └── validation.js
├── App.jsx             # Root app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Code Quality Standards

### ESLint & Prettier

Code formatting and linting are enforced automatically:

```bash
# Check code quality
npm run lint

# Auto-fix issues
npm run lint:fix

# Format code
npm run format

# All together (pre-commit hook)
npm run lint && npm run format
```

### Git Hooks (Husky)

Hooks automatically run before committing:
- **Pre-commit**: Lint and format changed files
- **Pre-push**: Run tests and type checking

## Error Handling

### Error Boundary Component

Catches React errors and prevents white-screen crashes:

```jsx
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

### Error Handler Service

Global error logging and monitoring:

```javascript
import { errorHandler, useErrorHandler } from '@/services/errorHandler'

// In components
const { logError, getUserMessage } = useErrorHandler()

try {
  // Your code
} catch (error) {
  logError(error, { component: 'MyComponent' })
  toast.error(getUserMessage(error))
}
```

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Watch mode
npm test -- --watch

# UI mode
npm run test:ui

# Coverage report
npm run test:coverage
```

### Test Structure

Tests follow this pattern:

```javascript
describe('Component Name', () => {
  it('should render correctly', () => {
    // Test code
  })

  it('should handle user interaction', () => {
    // Test code
  })
})
```

## Validation

All forms use Zod for schema validation:

```javascript
import { z } from 'zod'

const userSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Minimum 8 characters'),
})

// Usage
const parsed = userSchema.safeParse(data)
if (!parsed.success) {
  console.error(parsed.error.flatten())
}
```

## Performance Tips

1. **Lazy Load Routes**: Use `React.lazy()` for page components
2. **Memoize Components**: Use `React.memo()` for expensive renders
3. **Code Splitting**: Vite automatically handles this
4. **Image Optimization**: Use WebP and AVIF formats
5. **Component Props**: Keep prop drilling minimal with Context

## State Management

Currently using React Context. For larger apps, consider:
- **Zustand**: Lightweight alternative
- **Redux**: Enterprise-scale state
- **TanStack Query**: Server state management

## API Integration

### Service Pattern

All external calls use service modules:

```javascript
// services/bookingService.js
export const bookingService = {
  createBooking: async (data) => { /* ... */ },
  getBookings: async (userId) => { /* ... */ },
}

// In components
const bookingId = await bookingService.createBooking(formData)
```

## Building for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Module not found | Check import paths (relative vs absolute) |
| CSS not applying | Ensure Tailwind content is configured |
| Type errors | Run `npm run type-check` to validate |
| Tests failing | Clear node_modules and reinstall |

---

For more details, see specific guides:
- [Firebase Setup](./docs/FIREBASE.md)
- [API Documentation](./docs/API.md)
- [Testing Guide](./docs/TESTING.md)
