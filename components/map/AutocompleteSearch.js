
import React from "react";
import { useState, useEffect, useRef } from "react";
import Autocomplete from 'react-native-autocomplete-input';
import Constants from 'expo-constants';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text
} from "react-native";

import SearchItem from "./SearchItem.js";
import { SearchResultBox, SearchResult } from "./SearchResults.js"
import { autocompletePlacesSearch, placesSearch } from "../../features/map/api.js";
import { getRegion } from "../../features/map/utils.js";


export default function AutocompleteSearch(props) {
  const { onResultSelected, location, autocompleteParams={}, searchParams={} } = props;

  const [ items, setItems ] = useState([]);
  const [ selectedItem, setSelectedItem ] = useState({});
  const [ results, setResults ] = useState([]);
  const [ isVisiblePlacesList, setIsVisiblePlacesList ] = useState(false);
  const map = useRef()
  console.log(location.coords)

  async function onChangeText(q){
    const items = q? await autocompletePlacesSearch(q, location, autocompleteParams): [];
    setItems(items);
  }

  async function onItemSelected(item){
    setSelectedItem(item);
    setItems([]);
    const results = await placesSearch(item.value, location, searchParams);
    setResults(results);
    setIsVisiblePlacesList(true);
  }

  function onPlaceSelected(item) {
    const { lat:latitude, lon:longitude } = item.position;
    map.current.animateToRegion(getRegion({latitude, longitude}))
    setIsVisiblePlacesList(false);
  }

  return (
    <View style={styles.mainContainer}>
      {isVisiblePlacesList &&
        <SearchResultBox
          data={results}
          itemComponent={SearchResult}
          onSelect={onPlaceSelected}
        />
      }
      <View style={styles.mapContainer}>
        <MapView
          ref={map}
          style={StyleSheet.absoluteFillObject}
          mapType="hybrid"
          provider={PROVIDER_GOOGLE}
          initialRegion={getRegion(location.coords)}
          showsUserLocation={true}
          loadingEnabled={true}
          
        >
          {results.map(place => {
            const { name } = place.poi;
            const { lat:latitude, lon:longitude } = place.position;

            return (
              <MapView.Marker
                coordinate={{latitude, longitude}}
                title={name}
              >
                <Image source={require('../../assets/map-markers/marker.png')} />
              </MapView.Marker>
            )
          })}
        </MapView>
      </View>
      <Autocomplete
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={styles.autocompleteStyle}
        data={items}
        keyExtractor={(item, i) => i.toString()}
        onChangeText={(text) => onChangeText(text)}
        placeholder="Search"
        flatListProps={{
          renderItem: ({item}) => (
            <SearchItem item={item} onItemSelected={onItemSelected} /> 
          )
        }}
      />
      {results.length?
        <Button
          title={isVisiblePlacesList? "Hide places list": "Show places list"}
          onPress={() => setIsVisiblePlacesList(state => !state)}
        />: null
      }
    </View>
  )

};


const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    paddingTop: 80,
  },
  mapContainer: {
    flex: 1,
  },
  autocompleteStyle: {
    flex: 1,
    left: 10,
    position: 'absolute',
    right: 10,
    top: 35,
    zIndex: 1,
    borderRadius: 20,
  },
  searchBoxTextItem: {
    margin: 5,
    fontSize: 16,
    paddingTop: 4,
  },
  selectedTextContainer: {
    flex: 1,
    marginTop: 55,
  },
  selectedTextStyle: {
    textAlign: 'center',
    fontSize: 18,
  },
 
});
