import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import { Button, Text, View } from 'react-native';
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

import { auth } from "../../config/firebase/";
import { extraConfig } from "../../config/";
import { SafeView } from "../../components";


WebBrowser.maybeCompleteAuthSession();


export default function GoogleLoginScreen() {
  const { webClientId } = extraConfig.google;

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: webClientId,
    },
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <>
    <SafeView style={styles.logoContainer}>
      <Text style={ styles.title }> Expo example App</Text>
    </SafeView>
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Google Sign in"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
    </>
  );
}


const styles = {
  logoContainer: {
    flex:1,
    alignItems: "center",
  },
  title: {
    marginTop: 40,
    fontSize: 30,
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    fontSize: 20,
    padding: 20,
  }
}

