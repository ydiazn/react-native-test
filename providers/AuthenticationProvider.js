import React, { useState, createContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const AuthenticationContext = createContext({});


export default function AuthenticationProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

