/** 
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { Button, Linking, View, ScrollView, Text } from 'react-native';

import { text } from './text';
import {
  registerForPushNotificationsAsync,
  sendPushNotification
} from "../../notification.js";


async function onSendPushNotification() {
  const token = await registerForPushNotificationsAsync();
  if (token) {
    const message = {
      sound: 'default',
      title: 'Original Title',
      body: 'And here is the body!',
    };

    sendPushNotification(token, message);
  }
}

export default function LinkScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Links</Text>
      <View style={styles.card}>
        <Text style={styles.link}
          onPress={() => Linking.openURL('http://docs.expo.dev')}
        >
          Expo development docs
        </Text>
        <Text style={styles.link}
          onPress={() => Linking.openURL('mailto:support@expo.dev')}
        >
          Send a email
        </Text>
        <Text style={styles.link}
          onPress={() => Linking.openURL('tel:+123254789')}
        >
          Make a call
        </Text>
        <Text style={styles.link}
          onPress={() => Linking.openURL('sms:+123254789')}
        >
          Send a message
        </Text>
        <Button title="Send push notification" onPress={onSendPushNotification} />
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
    marginBottom: 20,
    padding: 5,
  },
  link: {
    fontSize: 14,
    color: '#557F94',
    marginBottom: 10,
  },
  text: {
    textAlign: "justify",
  },
  h1: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  }
  

}
