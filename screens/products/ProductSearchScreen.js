import React from "react";
import { useContext, useLayoutEffect, useState } from "react";
import { TouchableOpacity, View, ScrollView, Text }  from "react-native";
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import { AuthenticationContext } from "../../providers/";

import { ProductView } from "../../components/products";
import { SearchBar } from "../../components/";


export default function ProductSearchScreen({navigation, route}){
  const { products:initialProducts } = route.params;
  const  { user } = useContext(AuthenticationContext);
  const [ isLoading, setIsLoading ] = useState(false); 
  const [ products, setProducts ] = useState(initialProducts);
  const [ q, setQ ] = useState("");
  const [ searchFieldIsEmpty, setSearchFieldIsEmpty ] = useState(true);
  

  function filter(value) {
    setIsLoading(true);

    const filtered = initialProducts.filter((item) => {
      const query = value.trim().toLowerCase();
      const { name } = item

      return name.trim()
        .toLowerCase()
        .includes(query);
    })
    setProducts(filtered);
    setIsLoading(false);
  }

  function onChange(q){
    setQ(q);
    setSearchFieldIsEmpty(q? false: true);
    filter(q);
  }

  function clear() {
    const q = "";
    setQ(q);
    setSearchFieldIsEmpty(true);
    filter(q);
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <SearchBar
          {...props}
          onChange={onChange}
          value={q}
        />
      ),
      headerRight: () => (!searchFieldIsEmpty &&
        <TouchableOpacity
          style={styles.headerButtonContainer}
          onPress={ clear }
        >
          <Icon name="times" size={20} color="black" />
        </TouchableOpacity>
      )
    })
  }, [navigation, q, setSearchFieldIsEmpty])
  
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
  },
  headerButtonContainer: {
    marginRight: 20,
    padding: 20,
  }
}

