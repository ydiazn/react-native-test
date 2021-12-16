import React from 'react';
import { Button, Image, StyleSheet, Text, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { recentPhotoSelector } from "../../features/flickr/recentPhotoSlice.js";


export default function PhotoInfoScreen({route}) {
    const navigation = useNavigation();
    const { photoId } = route.params;
    const { photos } = useSelector(recentPhotoSelector);

    const current = photos.find((photo) => {
        return photo.id == photoId;
    });
    
    const {title, url, ...rest } = current;
    const attrs = Object.entries(rest);

    return (
      <View style={styles.container}>
        <View style={styles.imageCard}>
          <Image
            style={styles.image}
            source={{uri: url}}
        />
        </View>
        <View style={styles.infoCard}>
          <FlatList
          data={attrs}
          renderItem={({item, index}) => (
            <View style={styles.item} key={index}>
              <View style={styles.column}>
                <Text>{item[0]}</Text>
              </View>
              <View style={styles.column}>
                <Text>{item[1]}</Text>
              </View>
            </View>
          )}
        />
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      flex: 1,
      flexDirection: 'row',
    },
    infoCard: {
      flex: 2,
      padding: 10,
    },
    imageCard: {
      flex: 1,
      marginBottom: 10,
    },
    image: {
      resizeMode: 'cover',
      ...StyleSheet.absoluteFillObject,
    },
    title: {
      fontSize: 20,
    },
    column: {
      flex: 1,
      padding: 5,
      alignItems: 'center',
    }
 });
