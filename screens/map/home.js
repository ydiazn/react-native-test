import React from "react";
import { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View, ScrollView, TouchableOpacity, Text } from "react-native";
import Autocomplete from 'react-native-autocomplete-input';
import Constants from 'expo-constants';
import { useSelector, useDispatch } from 'react-redux';

import { locationActions, locationSelector } from "../../features/map/locationSlice.js";
import { SafeView } from "../../components/";
import { AutocompleteSearch, SearchItem, SearchResultBox } from "../../components/map/";
import { autocompletePlacesSearch, placesSearch } from "../../features/map/api.js";


export default function MapScreen() {

  const dispatch = useDispatch();
  const { isLoading, permission, location, error } = useSelector(locationSelector);
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
    mapView = <SafeView style={styles.mainContainer}>
      <AutocompleteSearch
        location={location}
        onResultSelected={result => console.log(result)}
      />
    </SafeView>
  }
  else if (error){
    mapView = <Text>{ error.message }</Text>;
  }
  else {
      mapView = <Text>Permission non granted</Text>;
  }

  return ( mapView );

};


const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FAFAFA',
    flex: 1,
  },

});

