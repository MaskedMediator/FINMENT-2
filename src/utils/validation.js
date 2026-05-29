import { z } from 'zod';

export const bookingSchema = z.object({
  problem: z.string().min(1, 'Please select a problem'),
  fridgeType: z.string().min(1, 'Please select fridge type'),
  brand: z.string().min(1, 'Please select brand'),
  model: z.string().optional(),
  age: z.string().optional(),
  customerName: z.string().min(2, 'Name must be at least 2 characters'),
  customerPhone: z.string().regex(/^[0-9+]{8,}$/, 'Please enter a valid phone number'),
  customerEmail: z.string().email('Invalid email address'),
  customerAddress: z.string().min(5, 'Please enter a complete address'),
  preferredDate: z.date().min(new Date(), 'Please select a future date'),
  preferredTime: z.string().min(1, 'Please select a time slot'),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z
  .object({
    displayName: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
