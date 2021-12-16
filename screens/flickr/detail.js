import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import { recentPhotoSelector } from "../../features/flickr/recentPhotoSlice.js";


export default function DetailScreen({route, navigation}) {
    const { photoId } = route.params;
    const { photos } = useSelector(recentPhotoSelector);

    const current = photos.find((photo) => {
        return photo.id == photoId;
    });
    
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <RightHeader {...{photoId}} />
        ),
      });
    }, [navigation]);

    return (
        <View style={styles.container}>
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={{uri: current.url}
            }/>
          </View>
          <View style={styles.header}>
            <Text style={styles.title}>{current.title}</Text>
          </View>
        </View>
    );
}


function RightHeader({photoId}){
  const navigation = useNavigation();

  return (
    <View style={styles.rightHeader}>
      <Button
        title='Info'
        onPress={() => {
          navigation.navigate('FlickrPhotoInfo', {photoId})
        }}
      >Info
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      resizeMode: 'contain',
      ...StyleSheet.absoluteFillObject,
    },
    header: {
      opacity: 0.6,
      padding: 10,
      backgroundColor: 'black',
    },
    rightHeader: {
      padding: 5,
    },
    title: {
      color: 'white',
    }
 });
