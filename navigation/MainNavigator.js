import React from 'react';
import { StyleSheet, TouchableOpacity, View } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { auth } from "../config/firebase/"
import SecondaryNavigator from "./SecondaryNavigator.js";
import { MapHomeScreen } from "../screens";
import {
  ProductScreen,
  AddProductScreen,
  ProductSearchScreen,
} from "../screens/products/";
import {
  FlickrHomeScreen,
  PhotoDetailScreen,
} from "../screens/flickr/";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name='Home'
        component={TabNavigator}
        options={
          {
            title: "React native test",
            headerShown: true,
            headerRight: () => (
              <View style={styles.headerRightContainer}>
                <TouchableOpacity
                  onPress={() => {
                    auth.signOut();
                  }}
                >
                  <View style={styles.searchButton}>
                    <FontAwesome name="sign-out" size={20} color="black" />
                  </View>
                </TouchableOpacity>
              </View>
            )
          }
        }
      />
      <Stack.Screen
        name='AddProduct'
        component={AddProductScreen}
        options={{title: "Add a product"}}
      />
      <Stack.Screen
        name='ProductSearch'
        component={ProductSearchScreen}
      />
      <Stack.Screen
        name='FlickrPhotoDetail'
        component={PhotoDetailScreen}
        options={{
          title: "Photo detail",
          presentation: "modal",
          headerShown: false,
        }}
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
          }  else {
            iconName = "bars";
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
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
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Others"
        component={SecondaryNavigator}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: "row-reverse",
    flex: 1,
    padding:10,
    paddingLeft: 20,
    justifyContent: "space-around",
    alignItems: "center",
  }
})
