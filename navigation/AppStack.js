import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AddProductScreen, ProductScreen } from '../screens/products/';


const Stack = createStackNavigator();


export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ProductScreen'
        component={ProductScreen}
        options={{title: "Products"}}
      />
      <Stack.Screen
        name='AddProductScreen'
        component={AddProductScreen}
        options={{title: "Add a product"}}
      />
    </Stack.Navigator>
  );
};

