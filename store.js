import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'


import recentPhotosReducer from './features/flickr/recentPhotoSlice';
import locationReducer from './features/map/locationSlice';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    recentPhotos: recentPhotosReducer,
    location: locationReducer,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
