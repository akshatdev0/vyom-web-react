import * as z from 'zod';
import * as v from 'validations';

type AddressMessages = {
  addressLine1?: string;
  area?: string;
  city?: string;
  state?: string;
  country?: string;
};

// eslint-disable-next-line
export const address = (messages?: AddressMessages) =>
  z.object({
    id: v.id(),
    addressLine1: z.string().nonempty({ message: messages?.addressLine1 || '.Address Line 1 is required!' }),
    addressLine2: z.string().optional(),
    landmark: z.string().optional(),
    postalCode: z.string().optional(),
    area: z.object({
      id: z.string().refine((value) => value && value.trim() !== '' && value !== '0', {
        message: messages?.country || 'Select an area!',
      }),
      city: z.object({
        id: z.string().refine((value) => value && value.trim() !== '' && value !== '0', {
          message: messages?.state || 'Select a city!',
        }),
        state: z.object({
          id: z.string().refine((value) => value && value.trim() !== '' && value !== '0', {
            message: messages?.city || 'Select a state!',
          }),
          country: z.object({
            id: z.string().refine((value) => value && value.trim() !== '' && value !== '0', {
              message: messages?.area || 'Select a country!',
            }),
          }),
        }),
      }),
    }),
  });
