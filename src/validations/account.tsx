import * as z from 'zod';
import { mobileNumberValidator } from 'core/utils';
import { Enum_Userspermissionsuser_Gender } from 'generated/graphql';

type MobileNumberMessages = {
  nonempty?: string;
  valid?: string;
};

export const mobileNumber = (messages?: MobileNumberMessages): z.ZodString =>
  z
    .string()
    .nonempty({ message: messages?.nonempty || 'Enter your mobile number!' })
    .refine(mobileNumberValidator, {
      message: messages?.valid || 'Enter a valid mobile number!',
    });

// TODO - fix backend and make `isOptional = true`
export const alternateMobileNumber = (message?: string): z.ZodString =>
  z.string().refine((m) => mobileNumberValidator(m, false), {
    message: message || 'Enter a valid mobile number!',
  });

export const alternateMobileNumberOptional = (
  message?: string,
): z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodUndefined]>, z.ZodLiteral<''>]> =>
  alternateMobileNumber(message).optional().or(z.literal(''));

export const otp = (message?: string): z.ZodString => z.string().length(6, { message: message || 'Enter valid OTP!' });

export const password = (message?: string): z.ZodString =>
  z.string().nonempty({ message: message || 'Enter your password!' });

export const newPassword = (message?: string): z.ZodString =>
  z.string().nonempty({ message: message || 'Enter a password!' });

export const confirmPassword = (message?: string): z.ZodString =>
  z.string().nonempty({ message: message || 'Confirm your password!' });

type CreatePasswordMessages = {
  password?: string;
  confirmPassword?: string;
  match?: string;
};

export const createPassword = (messages?: CreatePasswordMessages): z.ZodObject<any> =>
  z
    .object({
      password: newPassword(messages?.password),
      confirmPassword: confirmPassword(messages?.confirmPassword),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: messages?.match || 'Passwords must match!',
      path: ['confirmPassword'],
    });

export const firstName = (message?: string): z.ZodString =>
  z.string().nonempty({ message: message || 'Enter your firstName!' });

export const lastName = (message?: string): z.ZodString =>
  z.string().nonempty({ message: message || 'Enter your lastName!' });

export const email = (message?: string): z.ZodString =>
  z.string().email({ message: message || 'Enter a valid email address!' });

export const emailOptional = (
  message?: string,
): z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodUndefined]>, z.ZodLiteral<''>]> =>
  email(message).optional().or(z.literal(''));

export const gender = (): z.ZodNativeEnum<typeof Enum_Userspermissionsuser_Gender> =>
  z.nativeEnum(Enum_Userspermissionsuser_Gender);
