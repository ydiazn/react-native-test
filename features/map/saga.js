import { call, put, takeLatest } from 'redux-saga/effects'
import * as Location from 'expo-location';

import { locationActions } from './locationSlice';


export default function* watchLocationFetch() {
    const {
      fetchRequested,
      permissionRequested,
      permissionAttended,
      locationFetched,
      fetchFailed,
    } = locationActions;

    yield takeLatest(permissionRequested, function* (action){
        try {
            console.log('Location permision granting watched');
            const status = yield call(Location.requestForegroundPermissionsAsync);
            yield put(permissionAttended(status));
            yield put(fetchRequested());
            const location = yield call(Location.getCurrentPositionAsync, {});
            yield put(locationFetched(location));
         } catch (e) {
            yield put(fetchFailed({message: e.message}));
         }
    })
}
