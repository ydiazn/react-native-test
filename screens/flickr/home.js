/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Button, View } from 'react-native';

import styles from './styles.js'
import { PhotoView, RecentPhotos } from "../../components/flickr"


export default function FlickrHomeScreen(){
  return (
    <View style={styles.container}>
      <RecentPhotos renderView={PhotoView} perPage='40'/>
    </View>
  );
};
