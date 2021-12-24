
import React from "react";
import { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View, ScrollView, TouchableOpacity, Text } from "react-native";
import Autocomplete from 'react-native-autocomplete-input';
import Constants from 'expo-constants';

import SearchItem from "./SearchItem.js";
import { SearchResultBox, SearchResult } from "./SearchResults.js"
import { autocompletePlacesSearch, placesSearch } from "../../features/map/api.js";


export default function AutocompleteSearch(props) {
  const { onResultSelected, location, autocompleteParams={}, searchParams={} } = props;

  const [ items, setItems ] = useState([]);
  const [ selectedItem, setSelectedItem ] = useState({});
  const [ results, setResults ] = useState([]);

  async function onChangeText(q){
    const items = q? await autocompletePlacesSearch(q, location, autocompleteParams): [];
    console.log(items);
    setItems(items);
  }

  async function onItemSelected(item){
    setSelectedItem(item);
    setItems([]);
    const results = await placesSearch(item.value, location, searchParams);
    setResults(results);
  }

  return (
    <View style={styles.mainContainer}>
      <SearchResultBox
        data={results}
        itemComponent={SearchResult}
        onSelect={onResultSelected}
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
    </View>
  )

};


const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    paddingTop: 80,
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
