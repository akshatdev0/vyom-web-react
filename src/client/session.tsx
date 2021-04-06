import { SignInMutation } from 'generated/graphql';

export const createSession = (data: SignInMutation): void => {
  if (sessionStorage) {
    sessionStorage.clear();
    if (data?.signIn?.jwt) {
      sessionStorage.setItem('token', data.signIn.jwt);
    }
    if (data?.signIn?.user) {
      sessionStorage.setItem('user', JSON.stringify(data.signIn.user));
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

export const getSession = (): SignInMutation => {
  if (sessionStorage) {
    const token = sessionStorage.getItem('token');
    const user = sessionStorage.getItem('user');
    if (token === null || user === null) {
      throw new Error('Invalid session!');
    }
    return {
      signIn: {
        jwt: token,
        user: JSON.parse(user),
      },
    };
  } else {
    throw new Error(`'SessionStorage' is not available.`);
  }
};

export const getSessionToken = (): string | null | undefined => {
  try {
    const session: SignInMutation = getSession();
    return session.signIn.jwt;
  } catch (e) {
    return null;
  }
};
