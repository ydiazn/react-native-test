/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { View, ScrollView, Text } from 'react-native';

import { text } from '../../assets/large-text.js';

export default function TextScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ScrollView style={styles.scrollText}>
          <Text style={styles.text}>{text}</Text>
        </ScrollView>
      </View>
    </View>
  );
}


const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    flex: 1,
    marginBottom: 10,
    padding: 5,
  },
  scrollText: {
    padding: 10,
  },
  text: {
    textAlign: "left",
  },
  h1: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  }
  

}
