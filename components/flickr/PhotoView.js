/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { FlatList } from 'react-native';

import PhotoItem from './PhotoItem'


export default function PhotoView({photos}) {

  return (
    <FlatList
        data={photos}
        renderItem={props => <PhotoItem {...props} />}
        keyExtractor={item => item.id}
        numColumns='3'
      />
  )
};


