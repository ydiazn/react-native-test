/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Image, ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';

import { locationActions, locationSelector } from "../../features/map/locationSlice.js";


export default function Map() {
  const dispatch = useDispatch();
  const {
    isGranting,
    isFetching,
    isLoading,
    permission,
    location,
    error,
  } = useSelector(locationSelector);

  const { permissionRequested } = locationActions;

  // Fetching location
  useEffect(() => {
    dispatch(permissionRequested());
  }, []);
  
  let mapView;
  if (isLoading) {
    mapView = <ActivityIndicator/>;
  }
  else if (location) {
    mapView = <MapView
      style={styles.map} 
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <MapView.Marker
        coordinate={location.coords}
        title={"User Location"}
        description={"You are here!"}>
          <Image source={require('../../assets/map-markers/marker.png')} />
      </MapView.Marker>  
    </MapView>
  }
  else if (error){
    mapView = <Text>{ error.message }</Text>;
  }
  else {
      mapView = <Text>Permission non granted</Text>;
  }

  return (
    <View style={styles.container}>
      {mapView}
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: 500,
    height: 500,
  },
});
