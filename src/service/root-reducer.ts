import { all, call } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import { personReducer } from './person/actions';
import { personSaga } from './person/sagas';
import { PersonState } from "./person/types";

export interface RootState {
    person: PersonState
}

export default combineReducers({
    person: personReducer
});

export function* rootSaga() {
    yield all([ call(personSaga) ]);
}
