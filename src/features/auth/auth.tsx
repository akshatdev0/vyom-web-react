import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { clearSession, createSession, getSession } from 'client/session';
import { SignInMutation } from 'generated/graphql';

type InternalState = {
  isLoading: boolean;
  isSignedIn: boolean;
  sessionExists: boolean;
  data: SignInMutation | null | undefined;
};

type AuthState = {
  isLoading: boolean;
  isSignedIn: boolean;
  user: SignInMutation['signIn']['user'] | null | undefined;
  signIn: (payload: SignInMutation) => void;
  signOut: () => void;
};

type AuthAction =
  | { type: 'RESTORE'; payload: SignInMutation }
  | { type: 'SIGN_IN'; payload: SignInMutation }
  | { type: 'SIGN_OUT' }
  | { type: 'SESSION_CREATED' }
  | { type: 'SESSION_CLEARED' };

type AuthReducer = (prevState: InternalState, action: AuthAction) => InternalState;

type AuthProviderProps = {
  children: React.ReactNode;
};

const initialInternalState: InternalState = {
  isLoading: true,
  isSignedIn: false,
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
        sessionExists: true,
        data: action.payload,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isLoading: false,
        isSignedIn: true,
        data: action.payload,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isLoading: false,
        isSignedIn: false,
        data: null,
      };
    case 'SESSION_CREATED':
      return {
        ...prevState,
        sessionExists: true,
      };
    case 'SESSION_CLEARED':
      return {
        ...prevState,
        sessionExists: false,
      };
  }
};

const useAuth = (): AuthState => {
  const [state, dispatch] = useReducer<AuthReducer>(reducer, initialInternalState);

  const restore = (payload: SignInMutation) => dispatch({ type: 'RESTORE', payload });

  const signIn = (payload: SignInMutation) => dispatch({ type: 'SIGN_IN', payload });

  const signOut = () => dispatch({ type: 'SIGN_OUT' });

  const sessionCreated = () => dispatch({ type: 'SESSION_CREATED' });

  const sessionCleared = () => dispatch({ type: 'SESSION_CLEARED' });

  // Restore Session on bootstrap
  useEffect(() => {
    const restoreAsync = () => {
      try {
        const session = getSession();
        restore(session);
      } catch (e) {
        signOut();
      }
    };

    if (!state.isSignedIn) {
      restoreAsync();
    }
  }, []);

  // Manage Session on SignIn or SignOut
  useEffect(() => {
    const manageSession = () => {
      if (state.isSignedIn) {
        if (!state.sessionExists) {
          try {
            if (state.data) {
              createSession(state.data);
              sessionCreated();
            }
          } catch (e) {
            signOut();
          }
        }
      } else {
        if (state.sessionExists) {
          clearSession();
          sessionCleared();
        }
      }
    };

    manageSession();
  }, [state.isSignedIn]);

  return {
    isLoading: state.isLoading,
    isSignedIn: state.isSignedIn,
    user: state.data?.signIn.user,
    signIn,
    signOut,
  };
};

const AuthContext = createContext<AuthState | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const context = useAuth();

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

const useAuthState = (): AuthState => {
  const state = useContext(AuthContext);

  if (!state) {
    throw new Error('No AuthContext set, use AuthProvider to set one');
  }

  return state;
};

export { AuthProvider, useAuthState };
