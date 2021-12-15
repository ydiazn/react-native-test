import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from "react-native";

import { RootNavigator } from "./navigation/";
import { AuthenticationProvider } from "./providers/";


export default function App() {
  return (
    <AuthenticationProvider>
        <RootNavigator />
    </AuthenticationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
