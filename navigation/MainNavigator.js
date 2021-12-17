import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { MapHomeScreen } from "../screens/";
import ProductNavigator from "./ProductNavigator";
import FlickrNavigator from "./FlickrNavigation.js";
import HomeScreen from "../screens/HomeScreen.js";


const Tab = createBottomTabNavigator();


export default function MainNavigator(){ 
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home'
          } 
          else if (route.name === 'Products') {
            iconName = 'shopping-cart'
          } else if (route.name === 'Photos'){
            iconName = "photo";
          } else if (route.name == "Map") {
            iconName =  "map";
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen
        options={{
          title: "Home",
          headerShown: false
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Products"
          component={ProductNavigator}
      />
      <Tab.Screen
        name="Photos"
          component={FlickrNavigator}
      />
      <Tab.Screen
        name="Map"
          component={MapHomeScreen}
      />
    </Tab.Navigator>
  );
}

