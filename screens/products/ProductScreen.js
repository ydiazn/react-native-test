import React from "react";
import { useContext, useLayoutEffect, useEffect, useState } from "react";
import { Button, View, ScrollView, Text, TouchableOpacity}  from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ActivityIndicator } from 'react-native';
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';

import { auth, db } from '../../config/firebase/';
import { AuthenticationContext } from "../../providers/";

import { ProductView } from "../../components/products";


export default function ProductScreen({ navigation }){
  const  { user } = useContext(AuthenticationContext);
  const [ isLoading, setIsLoading ] = useState(true); 
  const [ products, setProducts ] = useState([]);

  function onCollectionUpdate(querySnapshopt){
    const products = [];
    querySnapshopt.forEach((doc) => {
      const { name, price } = doc.data();
      const id = doc.id;
      products.push({name, price, id});
    })

    setProducts(products);
    setIsLoading(false);

    return () => {
      unsubscribe();
    }
  }
  
  useEffect(() => {
    const q = query(collection(db, "products"), where("user", "==", user.uid));
    const unsubscribe = onSnapshot(q, onCollectionUpdate);
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <>
        <TouchableOpacity
          onPress={() => {
            auth.signOut();
          }}
        >
          <View style={styles.searchButton}>
            <Icon name="user" size={20} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProductSearch", {
              products: products
            })
          }}
        >
          <View style={styles.searchButton}>
            <Icon name="search" size={20} color="black" />
          </View>
        </TouchableOpacity>
        </>
      ),
    });
  }, [navigation, products]);

  return (
    <View style={styles.container}>
      {isLoading? <ActivityIndicator/>: <ProductView products={products} />}
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
  },
  searchButton: {
    paddingRight: 20,
  }
}

