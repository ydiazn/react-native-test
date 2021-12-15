/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { FlatList } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

import ProductItem from './ProductItem';
import EmptyComponent from "../ListEmptyComponent.js";


export default function ProductView({products}) {
  const message = "There aren't product in shop." 

  return (
    <FlatList
      data={products}
      renderItem={props => <ProductItem {...props} />}
      keyExtractor={item => item.id}
      ListEmptyComponent={() => 
        <EmptyComponent
          message={message}
          IconComponent={(props) =>
            <Icon name="shopping-cart" {...props}/>}
        />
      }
    />
  )
};
