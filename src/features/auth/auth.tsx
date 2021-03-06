import React, { createContext, useContext, useEffect, useReducer } from 'react';

import { clearSession, setSession, getSession } from 'client/session';
import { AuthUserTokenPayload } from 'types';

type InternalState = {
  isLoading: boolean;
  isSignedIn: boolean;
  isSignedOut: boolean;
  sessionPending: boolean;
  sessionExists: boolean;
  data: AuthUserTokenPayload | null | undefined;
};

type AuthState = {
  isSignedIn: boolean;
  isSignedOut: boolean;
  user: AuthUserTokenPayload['user'] | null | undefined;
};

type AuthContext = AuthState & {
  isLoading: boolean;
  signIn: (payload: AuthUserTokenPayload) => void;
  signOut: () => void;
  createSession: (payload: AuthUserTokenPayload) => void;
};

type AuthAction =
  | { type: 'RESTORE'; payload: AuthUserTokenPayload }
  | { type: 'SIGN_IN'; payload: AuthUserTokenPayload }
  | { type: 'SIGN_OUT' }
  | { type: 'CREATE_SESSION'; payload: AuthUserTokenPayload }
  | { type: 'SESSION_CREATED' }
  | { type: 'SESSION_CLEARED' };

type AuthReducer = (prevState: InternalState, action: AuthAction) => InternalState;

type AuthProviderProps = {
  children: React.ReactNode;
};

const initialInternalState: InternalState = {
  isLoading: true,
  isSignedIn: false,
  isSignedOut: true,
  sessionPending: false,
  sessionExists: false,
  data: null,
};

const reducer: AuthReducer = (prevState: InternalState, action: AuthAction) => {
  switch (action.type) {
    case 'RESTORE':
      return {
        ...prevState,
        isLoading: false,
        isSignedIn: true,
        isSignedOut: false,
        sessionPending: false,
        sessionExists: true,
        data: action.payload,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isLoading: false,
        isSignedIn: true,
        isSignedOut: false,
        sessionPending: true,
        data: action.payload,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isLoading: false,
        isSignedIn: false,
        isSignedOut: true,
        sessionPending: false,
        data: null,
      };
    case 'CREATE_SESSION':
      return {
        ...prevState,
        isLoading: false,
        sessionPending: true,
        data: action.payload,
      };
    case 'SESSION_CREATED':
      return {
        ...prevState,
        sessionPending: false,
        sessionExists: true,
      };
    case 'SESSION_CLEARED':
      return {
        ...prevState,
        sessionPending: false,
        sessionExists: false,
      };
  }
};

const useAuth = (): AuthContext => {
  const [state, dispatch] = useReducer<AuthReducer>(reducer, initialInternalState);

  const restore = (payload: AuthUserTokenPayload) => dispatch({ type: 'RESTORE', payload });

  const signIn = (payload: AuthUserTokenPayload) => dispatch({ type: 'SIGN_IN', payload });

  const signOut = () => dispatch({ type: 'SIGN_OUT' });

  const createSession = (payload: AuthUserTokenPayload) => dispatch({ type: 'CREATE_SESSION', payload });

  const sessionCreated = () => dispatch({ type: 'SESSION_CREATED' });

  const sessionCleared = () => dispatch({ type: 'SESSION_CLEARED' });

  // Restore Session on initial load
  useEffect(() => {
    if (state.isSignedOut) {
      try {
        const session = getSession();
        restore(session);
      } catch (e) {
        signOut();
      }
    }
  }, []);

  // Create session if it is pending to be created
  useEffect(() => {
    if (state.sessionPending) {
      if (!state.sessionExists) {
        try {
          if (state.data) {
            setSession(state.data);
            sessionCreated();
          }
        } catch (e) {
          signOut();
        }
      }
    }
  }, [state.sessionPending]);

  // Clear session if signed out
  useEffect(() => {
    if (state.isSignedOut && state.sessionExists) {
      clearSession();
      sessionCleared();
    }
  }, [state.isSignedOut]);

  return {
    isLoading: state.isLoading,
    isSignedIn: state.isSignedIn,
    isSignedOut: state.isSignedOut,
    user: state.data?.user,
    signIn,
    signOut,
    createSession,
  };
};

const Context = createContext<AuthContext | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const context = useAuth();

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

const useAuthState = (): AuthContext => {
  const value = useContext(Context);

  if (!value) {
    throw new Error('No AuthContext set');
  }

  return value;
};

const getAuthData = (): AuthState => {
  try {
    const session = getSession();
    return {
      isSignedIn: true,
      isSignedOut: false,
      user: session.user,
    };
  } catch (e) {
    return {
      isSignedIn: false,
      isSignedOut: true,
      user: null,
    };
  }
};

export { AuthProvider, useAuthState, getAuthData };
