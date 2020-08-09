import { call, put, takeLatest } from 'redux-saga/effects';

import apiDataWrapped from './../api/api';
import { getPersonListRequest, getPersonListSuccess, getPersonListError } from './actions';

function* personListSaga() {
    try {
        yield put(getPersonListRequest());
        const data = yield call(apiDataWrapped);
        yield put(getPersonListSuccess(data));
    } catch(e) {
        yield put(getPersonListError(e));
    }
}

export function* personSaga() {
    yield takeLatest('PERSON_LIST', personListSaga);
}