import * as z from 'zod';
import { mobileNumberValidator } from 'core/utils';

export const mobileNumber = z
  .string()
  .nonempty({ message: 'Please enter your mobile number!' })
  .refine(mobileNumberValidator, {
    message: 'Please enter a valid mobile number!',
  });

export const alternateMobileNumber = z.string().refine(mobileNumberValidator, {
  message: 'Please enter a valid mobile number!',
});

export const alternateMobileNumberOptional = alternateMobileNumber.optional().or(z.literal(''));

export const password = z.string().nonempty({ message: 'Please enter your password!' });

export const newPassword = z.string().nonempty({ message: 'Please enter a password!' });

export const confirmPassword = z.string().nonempty({ message: 'Please confirm your password!' });

export const createPassword = z
  .object({
    password: newPassword,
    confirmPassword,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match!',
    path: ['confirmPassword'],
  });

export const firstName = z.string().nonempty({ message: 'Please enter your firstName!' });

export const lastName = z.string().nonempty({ message: 'Please enter your lastName!' });

export const email = z.string().email({ message: 'Please enter a valid email address!' });

export const emailOptional = email.optional().or(z.literal(''));

export const gender = z.string().nonempty({ message: 'Please select your gender!' });
