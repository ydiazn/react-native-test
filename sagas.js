import { all } from 'redux-saga/effects'

import watchRecentPhotosFetch from './features/flickr/saga';
import watchLocationFetch from './features/map/saga.js';


export default function* rootSaga() {
    yield all([
      watchRecentPhotosFetch(),
      watchLocationFetch(),
    ])
  }
