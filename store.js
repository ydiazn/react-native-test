import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'


import recentPhotosReducer from './features/flickr/recentPhotoSlice';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    recentPhotos: recentPhotosReducer,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
