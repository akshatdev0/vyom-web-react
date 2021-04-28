import * as z from 'zod';

export const companyName = (message?: string): z.ZodString =>
  z.string().nonempty({ message: message || 'Enter the name of your company!' });
