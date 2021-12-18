import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-auth-session/providers/facebook';;
import { Button, Text, View } from 'react-native';
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithCredential
} from "firebase/auth";

import { auth } from "../../config/firebase/";
import { extraConfig } from "../../config/";
import { SafeView } from "../../components";


WebBrowser.maybeCompleteAuthSession();


function watchResponse(response, provider) {
  if (response?.type === 'success') {
    const { id_token } = response.params;
    console.log(id_token)
    const credential = provider.credential(id_token);
    signInWithCredential(auth, credential);
  }
}


export default function GoogleLoginScreen() {
  const { webClientId:googleWebClientId } = extraConfig.google; 
  const { webClientId:facebookWebClientID } = extraConfig.facebook; 

  const [gRequest, gResponse, gPromptAsync] = Google.useIdTokenAuthRequest({
    clientId: googleWebClientId
  });
  
  const [fRequest, fResponse, fPromptAsync] = Facebook.useAuthRequest({
    responseType: ResponseType.Token,
    clientId: facebookWebClientID,
  });

  // Google
  React.useEffect(
    () => watchResponse(gResponse, GoogleAuthProvider), 
    [gResponse]
  );

  // Facebook
  React.useEffect(
    () => watchResponse(fResponse, FacebookAuthProvider), 
    [fResponse]
  );

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
          gPromptAsync();
        }}
      />
      <Button
        style={styles.button}
        title="Facebook sign in"
        onPress={() => {
          fPromptAsync();
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
}

