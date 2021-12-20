import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from "react-native";
import Autocomplete from 'react-native-autocomplete-input';
import Constants from 'expo-constants';

import { SafeView } from "../../components/";
import { SearchItem, SearchResultBox } from "../../components/map/";


export default function MapScreen() {

  const [ items, setItems ] = useState([]);
  const [ selectedItem, setSelectedItem ] = useState({});
  const [ results, setResults ] = useState([]);
  const [ selectedResult, setSelectedResult ] = useState(null);
  const { apiKey } = Constants.manifest.extra.tomtom;
   
  async function autocompleteSearch(q) {
    const url = `https://api.tomtom.com/search/2/autocomplete/${q}?ext=json&key=${apiKey}&language=en-US&limit=10&lat=-12.37&lon=16.93`;
    const response = await fetch(url);
    const data = await response.json();
    const { results } = data;

    let items = [];
    results.forEach(result => {
      const { segments } = result;
      segments.forEach(segment => items.push({value: segment.value}))
    })

    return items;
  }

  async function search(q) {
    const url = `https://api.tomtom.com/search/2/poiSearch/${q}.json?key=${apiKey}&limit=10&lat=-12.37&lon=16.93`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const { results } = data;
    console.log(results);

    setResults(results);
  }

  async function onChangeText(q){
    const items = q? await autocompleteSearch(q): [];
    console.log(items);
    setItems(items);
  }

  function onItemSelected(item){
    setSelectedItem(item);
    setItems([]);
    search(item.value);
  }

  return (
      <SafeView style={styles.mainContainer}>
        <SearchResultBox
          style={styles.searchResultBox}
          results={results}
          onResultSelected={(result) => setSelectedResult(result)}
        />
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
      </SafeView>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    padding: 10,
    paddingTop: 80,
  },
  searchResultBox: {
    flex: 1,
    backgroundColor: "cyan",
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
  mapContainer: {
    flex: 1,
  }
});

