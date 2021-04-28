import * as z from 'zod';

export const id = (message?: string): z.ZodString =>
  z.string().nonempty({ message: message || 'ID should not be empty!' });

export const selected = (message?: string): z.ZodString =>
  z.string().refine((value) => value !== '0', { message: message || 'Select an option!' });
