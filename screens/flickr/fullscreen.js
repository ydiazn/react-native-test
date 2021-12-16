import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { useSelector } from 'react-redux';
import { recentPhotoSelector } from '../../features/photo/recentPhotoSlice';


export default function PhotoModalScreen({route}) {
    const { photoId } = route.params;
    const { photos } = useSelector(recentPhotoSelector);

    const current = photos.find((photo) => {
        return photo.id == photoId;
    });

    return (
        <View style={styles.container}>
          <Image
              style={styles.image}
              source={{uri: current.url}
          }/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    image: {
      resizeMode: 'contain',
      ...StyleSheet.absoluteFillObject,
    },
 });
