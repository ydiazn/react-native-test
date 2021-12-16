
import React, { useState, useContext, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';

import  AuthStack from './AuthStack';
import  MainNavigator from './MainNavigator.js';
import { AuthenticationContext } from '../providers';

import { auth } from '../config/firebase/';


export const RootNavigator = () => {
  const { user, setUser } = useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuthStateChanged = onAuthStateChanged(
      auth,
      authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );

    // unsubscribe auth listener on unmount
    return unsubscribeAuthStateChanged;
  }, [user]);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <NavigationContainer>
      {user ? <MainNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

