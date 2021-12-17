import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isGranting: false,
  isFetching: false,
  permission: null,
  location: null,
  error: null,
};


export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    permissionRequested: (state) => {
      console.log('Permission location requested.');
      state.isGranting = true;
      state.isLoading = true;
    },
    permissionAttended: (state, action) => {
      console.log('Permission location attended.');
      state.permission = action.payload;
      state.isGranting = false;
    },
    fetchRequested: (state) => {
      console.log('Location fetch requested.');
      state.isFetching = true;
    },
    locationFetched: (state, action) => {
      console.log('Location fetched.');
      state.isFetching = false;
      state.isLoading = false;
      state.location = action.payload;
      console.log(state.location);
    },
    fetchFailed: (state, action) => {
      console.log('Location fetching failed.');
      console.log(action.payload);
      state.isFetching = false;
      state.isLoading = false;
      state.error = action.payload;
      state.location = null;
    }
  }
});


export const { actions:locationActions } = locationSlice;
export const locationSelector = (state) => state.location;

export default locationSlice.reducer;
