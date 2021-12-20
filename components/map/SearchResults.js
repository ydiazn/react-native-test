import React from "react"
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";


function SearchResult({poi, address}) {
  const { name } = poi;
  const { freeformAddress } = address;

  return (
    <View style={styles.container}>
      <View>
        <Text>{ name }</Text>
      </View>
      <Text>{ freeformAddress }</Text>
    </View>
  )
}


export default function SearchResultBox({results, onResultSelected}){
  console.log(results);
  return (
    <View style={styles.container}>
      <FlatList 
        data={results}
        renderItem={({item}) => <SearchResult {...item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
  },
})

