import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { GoogleLoginScreen } from '../screens/auth/';

const Stack = createStackNavigator();


export default function AuthStack(){
  return (
    <Stack.Navigator
      //screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='Login'
        component={GoogleLoginScreen}
        options={{title: "Welcome to React Native Test"}}
    />
    </Stack.Navigator>
  );
};

