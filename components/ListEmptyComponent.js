import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function ListEmptyComponent({message, IconComponent}){
  return (
    <View style={styles.container}>
      <IconComponent size={80} color="#343434" />
      <Text style={styles.message}>{ message }</Text>
    </View>
  )
}


const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    verticalAlign: "middle",
  },
  message: {
    marginTop: 30,
    textAlign: "center",
  }
}

