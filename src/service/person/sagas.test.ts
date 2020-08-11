import { call } from 'redux-saga/effects';
import {
    personListSaga
} from "./sagas";
import { getPersonListRequest, getPersonListSuccess } from './actions';
import apiDataWrapped from './../api/api';
import { Person } from './types';

describe('Person sagas', () => {
    const personListData:Person[] = [{
        firstNameLastName: 'Luke Skywalker',
        jobTitle: 'Galaxy Saviour',
        emailAddress: 'luke@skywalker.com',
        selected: true,
        id: '1'
    }];

    it('should dispatch request start', () => {
        const saga = personListSaga();
        expect(saga.next().value.payload.action).toEqual(getPersonListRequest());
    });

    it('should dispatch request for data', () => {
        const saga = personListSaga();
        saga.next();
        expect(saga.next().value).toEqual(call(apiDataWrapped));
    });

    it('should dispatch dispatch success action on success', async () => {
        const saga = personListSaga();

        saga.next();
        saga.next();
        expect(saga.next(personListData).value.payload.action).toEqual(getPersonListSuccess(personListData));
    });
});
