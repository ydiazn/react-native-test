import React from "react";
import { View, ScrollView, Text, Button } from "react-native";

import { Products, ProductView } from "../../components/products";


export default function ProductScreen({ navigation }){

  return (
    <View style={styles.container}>
      <Products renderView={ProductView} />
      <Button
        title="Add a product"
        onPress={() => navigation.navigate("AddProduct")}
      />
    </View>
  );
}


const styles = {
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  buttonContainer: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: "100%",
    height: 44,
    borderRadius: 5,
    backgroundColor: '#343434'
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff'
  }
}

