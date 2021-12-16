/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';

import { db } from '../../config/firebase';
import { AuthenticationContext } from "../../providers/";


export default function Products({renderView}){
  const  { user } = useContext(AuthenticationContext);
  const [ isLoading, setIsLoading ] = useState(true); 
  const [ products, setProducts ] = useState([]);

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
    const q = query(collection(db, "products"), where("user", "==", user.uid));
    const unsubscribe = onSnapshot(q, onCollectionUpdate);
  }, []);

  return (
    isLoading? <ActivityIndicator/>: renderView({products})
  );

}
