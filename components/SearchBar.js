import React from "react";
import { useState } from "react";
import { TextInput, TouchableOpacity, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function SearchBar({onChange, value}) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        placeholder="Search"
        onChangeText={onChange}
        autoCapitalize="none"
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
 });

