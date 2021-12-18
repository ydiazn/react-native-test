import React from "react";
import { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";


export default function SearchBar({onChange}) {
  const [ q, setQ ] = useState("");

  function onChangeText(value) {
    setQ(value);
    const qvalue = value.trim().toLowerCase();
    onChange(qvalue)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={q}
        placeholder="Search"
        onChangeText={onChangeText}
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
    justifyContent: "center"
  },
  input: {
    height: "40",
  }
});

