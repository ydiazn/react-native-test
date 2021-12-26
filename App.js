import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from "react-native";
import { Provider } from 'react-redux';

import { RootNavigator } from "./navigation/";
import { AuthenticationProvider } from "./providers/";
import store from "./store.js"
import { withPushNotifications } from "./components/";

const NavigatorWithPushNotification = withPushNotifications(RootNavigator);


export default function App() {
  return (
    <Provider store={store}>
      <AuthenticationProvider>
        <SafeAreaProvider>
          <NavigatorWithPushNotification />
        </SafeAreaProvider>
      </AuthenticationProvider>
    </Provider>
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
