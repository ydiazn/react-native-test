import React from "react";
import { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View, ScrollView, TouchableOpacity, Text } from "react-native";
import Autocomplete from 'react-native-autocomplete-input';
import Constants from 'expo-constants';
import { useSelector, useDispatch } from 'react-redux';

import { locationActions, locationSelector } from "../../features/map/locationSlice.js";
import { SafeView } from "../../components/";
import { AutocompleteSearch, Map, SearchItem, SearchResultBox } from "../../components/map/";
import { autocompletePlacesSearch, placesSearch } from "../../features/map/api.js";


export default function MapScreen() {

  const dispatch = useDispatch();
  const { isLoading, permission, location, error } = useSelector(locationSelector);
  const { permissionRequested } = locationActions;
  const [ initialLocation, setInitialLocation ] = useState(undefined);

  function onResultSelected(result) {
    const { lat:latitude, lon:longitude } = result.position;
    console.log(`Place selectd at location: ${latitude} ${longitude}`);
    setInitialLocation({latitude, longitude});
  }

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
        onResultSelected={onResultSelected}
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

