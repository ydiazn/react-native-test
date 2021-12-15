import React from "react";
import { Text, View, Button } from "react-native";

import { auth } from "../config/firebase/";


export default function HomeScreen() {
  
  return (
    <View>
      <Button
        title="Sign out"
        onPress={() => auth.signOut()}
      />
    </View>
  )
}

