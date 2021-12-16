import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  photos: [],
  isLoading: false,
  error: null
};


export const recentPhotoSlice = createSlice({
  name: 'recentPhotos',
  initialState,
  reducers: { 
    fetchRequested: (state) => {
      console.log('Fetch requested action called.');
      state.isLoading = true;
    },
    fetchSucceeded: (state, action) => {
      console.log('Fetch succeeded action called.');
      state.photos = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export const { actions:recentPhotoActions } = recentPhotoSlice;
export const recentPhotoSelector = (state) => state.recentPhotos;
export default recentPhotoSlice.reducer;
