
import * as React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TextScreen from '../screens/others/text';
import LinkScreen from '../screens/others/link';


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
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Text" component={TextScreen} />
      <Tab.Screen name="Links" component={LinkScreen} />
    </Tab.Navigator>
  );
}
