/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { collection, getDocs, onSnapshot, query } from 'firebase/firestore';

import { db } from '../../config/firebase';


export default function Products({renderView}){
  const [ isLoading, setIsLoading ] = useState(true); 
  const [ products, setProducts ] = useState([]);
  const ref = collection(db, "products");

  function onCollectionUpdate(querySnapshopt){
    const products = [];
    querySnapshopt.forEach((doc) => {
      products.push(doc);
    })

    setProducts(products);
    setIsLoading(false);

    return () => {
      unsubscribe();
    }
  }
  
  useEffect(() => {
    const unsubscribe = onSnapshot(ref, onCollectionUpdate);
  }, []);

  return (
    isLoading? <ActivityIndicator/>: renderView({products})
  );

}
