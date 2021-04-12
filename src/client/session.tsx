import { AuthUserTokenPayload } from 'types';

export const setSession = (data: AuthUserTokenPayload): void => {
  if (sessionStorage) {
    sessionStorage.clear();
    if (data?.jwt) {
      sessionStorage.setItem('token', data.jwt);
    }
    if (data?.user) {
      sessionStorage.setItem('user', JSON.stringify(data.user));
    }
  } else {
    throw new Error(`'SessionStorage' is not available.`);
  }
};

export const clearSession = (): void => {
  if (sessionStorage) {
    sessionStorage.clear();
  } else {
    throw new Error(`'SessionStorage' is not available.`);
  }
};

export const getSession = (): AuthUserTokenPayload => {
  if (sessionStorage) {
    const token = sessionStorage.getItem('token');
    const user = sessionStorage.getItem('user');
    if (token === null || user === null) {
      throw new Error('Invalid session!');
    }
    return {
      jwt: token,
      user: JSON.parse(user),
    };
  } else {
    throw new Error(`'SessionStorage' is not available.`);
  }
};

export const getSessionToken = (): string | null => {
  try {
    return sessionStorage.getItem('token');
  } catch (e) {
    return null;
  }
};
