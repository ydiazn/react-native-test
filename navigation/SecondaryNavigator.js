
import * as React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {LinkScreen, TextScreen, VideoScreen } from "../screens/others/";


const Tab = createBottomTabNavigator();


export default function SecondaryNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Text') {
            iconName = 'text'
          } 
          else if (route.name === 'Links') {
            iconName = 'globe'
          } else if (route.name == "Video"){
            iconName = "film";
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Video" component={VideoScreen} />
      <Tab.Screen
        name="Text"
        component={TextScreen}
        options={{title: "Large text"}}
      />
      <Tab.Screen name="Links" component={LinkScreen} />
    </Tab.Navigator>
  );
}
