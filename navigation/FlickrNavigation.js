import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  FlickrHomeScreen,
  PhotoDetailScreen,
  PhotoInfoScreen,
} from "../screens/flickr/";


const Stack = createStackNavigator();


export default function FlickrNavigator() {
  return (
    <Stack.Navigator initialrouteName="FlickrHome">
      <Stack.Screen
        name='FlickrHome'
        component={FlickrHomeScreen}
        options={{
          title: "Flickr recent photos",
        }}
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

