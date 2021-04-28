import jsonpath from 'jsonpath';
import { PhoneNumberUtil, PhoneNumberType } from 'google-libphonenumber';
import { DeepMap, FieldError, FieldValues } from 'react-hook-form';

export const getGraphQLError = (error: unknown): string => {
  const messages = jsonpath.query(
    error,
    '$.response.errors[0].extensions.exception.data.message[0].messages[0].message',
  );
  if (messages && messages.length > 0) {
    return messages[0];
  }
  return 'Something went wrong. Please try again!';
};

export const getZodError = (path: string, errors: DeepMap<FieldValues, FieldError>): string => {
  if (path.indexOf('.') === -1) {
    return errors[path]?.message;
  }

  const messages = jsonpath.query(errors, `$.${path}.message`);
  if (messages && messages.length > 0) {
    return messages[0];
  }
  return 'Please provide a valid input!';
};

export const mobileNumberValidator = (mobileNumber: string, isOptional?: boolean): boolean => {
  if (isOptional && (!mobileNumber || mobileNumber === '')) {
    return true;
  }

  const region = 'IN';
  const phoneNumberUtil: PhoneNumberUtil = PhoneNumberUtil.getInstance();
  try {
    const phoneNumber = phoneNumberUtil.parse(mobileNumber, region);
    if (
      phoneNumberUtil.isValidNumberForRegion(phoneNumber, region) &&
      phoneNumberUtil.getNumberType(phoneNumber) === PhoneNumberType.MOBILE
    ) {
      return true;
    }
  } catch (e) {
    return false;
  }
  return false;
};
