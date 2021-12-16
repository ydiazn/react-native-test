import { call, put, takeLatest } from 'redux-saga/effects'

import fetchRecentPhotos from './api';
import { recentPhotoActions } from './recentPhotoSlice';

function* watchRecentPhotoFetch() {
    const { fetchRequested, fetchSucceeded, fetchFailed } = recentPhotoActions;
    yield takeLatest(fetchRequested, function* (action){
        console.log('Action watch: recent photos fetch requested.');
        const { payload:perPage } = action;
        try {
            const photos = yield call(fetchRecentPhotos, {perPage});
            console.log('Recent photos fetched.');
            yield put(fetchSucceeded(photos));
         } catch (e) {
            yield put(fetchFailed({message: e.message}));
         }
    })
}


export default watchRecentPhotoFetch;
