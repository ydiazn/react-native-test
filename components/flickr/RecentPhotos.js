/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useEffect } from 'react'
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {
  recentPhotoActions,
  recentPhotoSelector
} from "../../features/flickr/recentPhotoSlice.js";


const RecentPhotos = ({renderView, perPage}) => {
  const dispatch = useDispatch();
  const { photos, isLoading } = useSelector(recentPhotoSelector); 
  const { fetchRequested } = recentPhotoActions;
  
  // Fetching recent photos
  useEffect(() => {
    dispatch(fetchRequested(perPage));
  }, []);

  return (
    isLoading? <ActivityIndicator/>: renderView({photos})
  );

}


export default RecentPhotos;
