import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen.js';


const Stack = createStackNavigator();


export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{title: "Home screen"}}
      />
    </Stack.Navigator>
  );
};

