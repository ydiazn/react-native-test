import React from "react";
import { useContext, useLayoutEffect, useState } from "react";
import { View, ScrollView, Text }  from "react-native";
import { ActivityIndicator } from 'react-native';

import { AuthenticationContext } from "../../providers/";

import { ProductView } from "../../components/products";
import { SearchBar } from "../../components/";


export default function ProductSearchScreen({navigation, route}){
  const { products:initialProducts } = route.params;
  const  { user } = useContext(AuthenticationContext);
  const [ isLoading, setIsLoading ] = useState(false); 
  const [ products, setProducts ] = useState(initialProducts);

  function onChange(q) {
    setIsLoading(true);
    const filtered = products.filter((item) => {
      const { name } = item
      const transform = name.trim().toLowerCase();
      return transform.includes(q);
    })
    setProducts(filtered);
    setIsLoading(false);
  }

  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => <SearchBar {...props} onChange={onChange} />
    })
  }, [navigation])
  
  return (
    <View style={styles.container}>
      {isLoading? <ActivityIndicator/>: <ProductView products={products} />}
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

