import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import { Button, View } from 'react-native';
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

import { auth } from "../../config/firebase/";
import { extraConfig } from "../../config/";


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
    <View>
    <Button
      disabled={!request}
      title="Google Sing in"
      onPress={() => {
        promptAsync();
      }}
    />
    </View>
  );
}

