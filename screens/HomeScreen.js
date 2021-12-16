import React from "react";
import { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { AuthenticationContext } from '../providers';
import { SafeView } from "../components";
import { auth } from "../config/firebase/";


export default function HomeScreen(){
  const { user } = useContext(AuthenticationContext);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerTitle}> Welcome </Text>
        <Text style={styles.email}>{ user.email }</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Sign out"
          onPress={() => auth.signOut()}
        />
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 40,
    marginBottom: 20,
  },
  email: {
    fontSize: 20
  }
})

