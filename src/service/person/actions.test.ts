import {
    getPersonListSuccess,
    getPersonListError,
    togglePersonSelect,
    personReducer,
    getPersonListRequest,
} from "./actions";
import { Person, PersonState } from './types';

describe('Person actions', () => {
    it('should attach data to getPersonListSuccess', () => {
        const personListData:Person[] = [{
            firstNameLastName: 'Luke Skywalker',
            jobTitle: 'Galaxy Saviour',
            emailAddress: 'luke@skywalker.com',
            selected: true,
            id: '1'
        }];

        const action = {
            type: 'PERSON_LIST_SUCCESS',
            data: personListData
        };

        expect(getPersonListSuccess(personListData)).toEqual(action);
    });

    it('should attach an error to getPersonListError', () => {
        const e:Error = new Error('Some error');
        const action = {
            type: 'PERSON_LIST_ERROR',
            e
        };

        expect(getPersonListError(e)).toEqual(action);
    });

    it('should attach person id to togglePersonSelect', () => {
        const id:string = '1';
        const action = {
            type: 'PERSON_SELECT_TOGGLE',
            id
        };

        expect(togglePersonSelect(id)).toEqual(action);
    });
});

describe('Person reducer', () => {
    const personListData:Person[] = [{
        firstNameLastName: 'Luke Skywalker',
        jobTitle: 'Galaxy Saviour',
        emailAddress: 'luke@skywalker.com',
        selected: true,
        id: '1'
    }];

    const unselectedPerson = {
        firstNameLastName: 'Darth Vader',
        jobTitle: 'Bad Guy',
        emailAddress: 'anakin@skywalker.com',
        selected: false,
        id: '2'
    };

    const initialState = {
        list: personListData,
        loading: false,
        error: undefined
    };

    it('should set loading flag and erase previous error when loading data', () => {
        const state:PersonState = { ...initialState, error:  new Error('Some error') };
        const expectedState:PersonState = { ...initialState, loading: true, error: undefined };

        expect(personReducer(state, getPersonListRequest())).toEqual(expectedState);
    });

    it('should attach fetched data to existing list, set loading to false and clear any errors', () => {
        const state:PersonState = { ...initialState, loading: true, error:  new Error('Some error') };
        const expectedState:PersonState = {
            ...initialState,
            loading: false,
            error: undefined,
            list: initialState.list.concat([unselectedPerson])
        };

        expect(personReducer(state, getPersonListSuccess([unselectedPerson]))).toEqual(expectedState);
    });

    it('should set error message when error occurs and set loading to false', () => {
        const state:PersonState = { ...initialState, loading: true };
        const error:Error = new Error('Some error');
        const expectedState:PersonState = {
            ...initialState,
            loading: false,
            error: error
        };

        expect(personReducer(state, getPersonListError(error))).toEqual(expectedState);
    });

    it('should change selected flag on togglePersonSelect', () => {
        const state:PersonState = { ...initialState, list: [ unselectedPerson ] };
        const updatedList:Person[] = [{ ...unselectedPerson, selected: true }];
        const expectedState:PersonState = {
            ...initialState,
            list: updatedList
        };

        expect(personReducer(state, togglePersonSelect('2'))).toEqual(expectedState);
    });

    it('should return default state for unmatched action', () => {
        expect(personReducer(initialState, () => ({ type: 'UNMATCHED' }))).toEqual(initialState);
    })
});