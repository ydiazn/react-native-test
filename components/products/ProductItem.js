/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View } from 'react-native';


export default function ProductItem({item}) {
  const { name, price } = item;

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.leftAlign}>{ name }</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.rightAlign}>{ price }</Text>
      </View>
    </View>
  );
};


const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 8,
    marginBottom: 30,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  column: {
    flex: 1,
  },
  leftAlign: {
    textAlign: "left",
  },
  rightAlign: {
    textAlign: "right",
  }
}
