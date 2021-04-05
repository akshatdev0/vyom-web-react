import jsonpath from 'jsonpath';

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
