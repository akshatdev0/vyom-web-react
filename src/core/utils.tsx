import jsonpath from 'jsonpath';
import { PhoneNumberUtil, PhoneNumberType } from 'google-libphonenumber';

export const getErrorMessage = (error: unknown): string => {
  const messages = jsonpath.query(
    error,
    '$.response.errors[0].extensions.exception.data.message[0].messages[0].message',
  );
  if (messages && messages.length > 0) {
    return messages[0];
  }
  return 'Something went wrong. Please try again!';
};

export const mobileNumberValidator = (mobileNumber: string): boolean => {
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
