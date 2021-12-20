import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function SearchItem({item, onItemSelected}){
  const { value } = item;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => onItemSelected(item)}
      >
        <Text style={styles.itemText}>{ value }</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
  },
  item: {
    flex:1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  itemText: {
    fontSize: 12,
    paddingBottom: 10,
    paddingTop: 10,
    borderStyle: "solid",
    borderColor: "#ccc",
    borderBottomWidth: 2,
  }
})

