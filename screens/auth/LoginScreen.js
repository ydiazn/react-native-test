import * as React from 'react';
import { useState } from "react";
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


export default function LoginScreen() {
  const [ authCredential, setAuthCredential ] = useState(null);
  const [ authError, setAuthError ] = useState(null);
  const { webClientId:googleWebClientId } = extraConfig.google; 
  const { webClientId:facebookWebClientID } = extraConfig.facebook; 

  const [gRequest, gResponse, gPromptAsync] = Google.useIdTokenAuthRequest({
    clientId: googleWebClientId
  });
  
  const [fRequest, fResponse, fPromptAsync] = Facebook.useAuthRequest({
    responseType: ResponseType.Token,
    clientId: facebookWebClientID,
  });

  const providers = {"google": GoogleAuthProvider, "facebook": FacebookAuthProvider }

  async function watchResponse(response, idProvider) {
    const provider = providers[idProvider];
    const tokenType = idProvider === "google"? "id_token": "access_token";
    if (response?.type === 'success') {
      const token = response.params[tokenType];
      const credential = provider.credential(token);
      try {
        const userCredential = await signInWithCredential(auth, credential);
        authCredential && user.linkWithCredential(authCredential);
      } 
      catch (error) {
        if (!authCredential && error.code === "auth/account-exists-with-different-credential"){
          setAuthCredential(credential);
          idProvider === "google"? fPromptAsync(): gPromptAsync();
        } else {
          console.log(error);
          setAuthError(error);
        }
      }
    }
  }

  // Google
  React.useEffect(
    () => watchResponse(gResponse, "google"), 
    [gResponse]
  );

  // Facebook
  React.useEffect(
    () => watchResponse(fResponse, "facebook"), 
    [fResponse]
  );

  return (
    <>
    <SafeView style={styles.logoContainer}>
      <Text style={ styles.title }> Expo example App</Text>
      { authError && 
        <Text style={ styles.error }>{ authError.message }</Text>
      }
    </SafeView>
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Google Sign in"
          onPress={() => gPromptAsync()}
          color="#226622"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Facebook sign in"
          onPress={() => fPromptAsync()}
        />
      </View>
    </View>
    </>
  );
}


const styles = {
  logoContainer: {
    flex:1,
    alignItems: "center",
    paddingHorizontal: 20,
    
  },
  title: {
    marginTop: 40,
    fontSize: 30,
    marginBottom: 20,
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  buttonContainer: {
    marginBottom: 10,
  },
  error: {
    color: "#990000",
    padding: 5,
    paddingHorizontal: 10,
    fontWeight: 400,
  }
}

