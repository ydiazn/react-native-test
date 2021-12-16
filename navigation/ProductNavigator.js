import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AddProductScreen, ProductScreen } from '../screens/products/';


const Stack = createStackNavigator();


export default function ProductNavigator() {
  return (
    <Stack.Navigator initialrouteName="ProductHome">
      <Stack.Screen
        name='ProductHome'
        component={ProductScreen}
        options={{
          title: "Products",
        }}
      />
      <Stack.Screen
        name='AddProduct'
        component={AddProductScreen}
        options={{title: "Add a product"}}
      />
    </Stack.Navigator>
  );
};

