/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { View } from 'react-native';

import Map from '../../components/map/Map.js';


export default function MapHomeScreen() {
  return (
    <View style={styles.container}>
      <Map/>
    </View>
  );
}


const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }

}
