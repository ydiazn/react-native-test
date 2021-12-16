/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//import React from 'react';
import * as React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import styles from "./styles"


const PhotoItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => {
        navigation.navigate('FlickrPhotoDetail', {
          photoId: item.id
        })
      }}>
        <Image
          style={styles.image}
          source={{uri: item.url}}
        />
      </TouchableOpacity>
    </View>
  );
};


export default PhotoItem;
