import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImageBackground, StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SafeView } from "../../components/"
import { useSelector } from 'react-redux';
import { recentPhotoSelector } from "../../features/flickr/recentPhotoSlice.js";


export default function DetailScreen({route, navigation}) {
    const { photoId } = route.params;
    const { photos } = useSelector(recentPhotoSelector);

    const current = photos.find((photo) => {
      return photo.id == photoId;
    });
     
    return (
      <SafeView style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          style={styles.image}
          source={{uri: current.url}}
        >
          <TouchableHighlight
            onPress={() => navigation.goBack()}
          >
            <View style={styles.button}>
              <Icon name="times" size={20} color="white" />
            </View>
          </TouchableHighlight>
        </ImageBackground>
      </SafeView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
    },
  button: {
      padding: 15,
      backgroundColor: "#222222",
      alignItems: "flex-end",
      opacity: 0.4,
    }
});

