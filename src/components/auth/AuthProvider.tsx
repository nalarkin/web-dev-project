import React, {
  useState,
  useMemo,
  useCallback,
  useContext,
  createContext,
} from 'react';

type CartContextType = {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
};

const initialContext = {
  isLoggedIn: false,
  logIn: () => null,
  logOut: () => null,
};

export const AuthContext = createContext<CartContextType>(initialContext);

type AuthProviderProps = {
  children: React.ReactNode;
};
export default function AuthProvider({ children }: AuthProviderProps) {
  const [loggedIn, setLogin] = useState(false);

  const logIn = useCallback(() => {
    setLogin(true);
  }, [setLogin]);

  const logOut = useCallback(() => {
    setLogin(false);
  }, [setLogin]);

  const contextValue = useMemo(() => {
    return {
      isLoggedIn: loggedIn,
      logIn,
      logOut,
    };
  }, [loggedIn, logIn, logOut]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
