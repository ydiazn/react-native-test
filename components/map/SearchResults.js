import React from "react"
import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";


function SearchResult({item, style, onPress}) {
  const { name } = item.poi;
  const { freeformAddress } = item.address;
  const apply = style === "itemSelectd"? [styles.container, styles.itemSelected]: styles.container;

  return (
    <View style={apply}>
      <TouchableOpacity
        onPress={() => onPress(item)}
      >
        <View>
          <Text>{ name }</Text>
        </View>
        <Text>{ freeformAddress }</Text>
      </TouchableOpacity>
    </View>
  )
}


function SearchResultBox({data, itemComponent, onSelect }){
  const [ overId, setOverId ] = useState(null);

  function renderItem({ item }){
    const itemStyle = item.id == overId? "itemSelectd": "item";
    return itemComponent({
      item,
      style: itemStyle,
      onPress: (item) => {
        setOverId(item.id);
        onSelect(item);
      }
    })
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={overId}

      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
    paddingHorizontal: 20,
  },
  itemSelected: {
    backgroundColor: "#eee",
  }
})

export { SearchResult, SearchResultBox }

