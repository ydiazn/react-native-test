import { all } from 'redux-saga/effects'

import watchRecentPhotosFetch from './features/flickr/saga';


export default function* rootSaga() {
    yield all([
      watchRecentPhotosFetch(),
    ])
  }
