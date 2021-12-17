import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { ProductScreen, AddProductScreen } from "../screens/products/";
import MapHomeScreen from "../screens/map/home.js";
import {
  FlickrHomeScreen,
  PhotoDetailScreen,
  PhotoInfoScreen,
} from "../screens/flickr/";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name='Home'
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='AddProduct'
        component={AddProductScreen}
        options={{title: "Add a product"}}
      />
      <Stack.Screen
        name='FlickrPhotoDetail'
        component={PhotoDetailScreen}
        options={{title: "Photo detail"}}
      />
      <Stack.Screen
        name='FlickrPhotoInfo'
        component={PhotoInfoScreen}
        options={{title: "Photo info"}}
      />
    </Stack.Navigator>
  );
};


function TabNavigator(){
  return (
    <Tab.Navigator
      initialRouteName="Products"
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
        //headerShown: false,
      })}
    >
      <Tab.Screen
        name="Products"
        component={ProductScreen}
      />
    <Tab.Screen
        name="Photos"
        component={FlickrHomeScreen}
        options={{title: "Flickr recent photos"}}
      />
      <Tab.Screen
        name="Map"
        component={MapHomeScreen}
      />
    </Tab.Navigator>
  );
}

