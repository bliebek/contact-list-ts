import {
    list,
    loading,
    error
} from "./selectors";
import { Person } from './types';
import { RootState } from "../root-reducer";

describe('Person selectors', () => {
    const personList:Person[] = [{
        firstNameLastName: 'Luke Skywalker',
        jobTitle: 'Galaxy Saviour',
        emailAddress: 'luke@skywalker.com',
        selected: true,
        id: '1'
    }];
    const err = new Error('Loading error');

    const initialState:RootState = {
        person: {
            list: personList,
            loading: true,
            error: err
        }
    };

    it('should return person list', () => {
        expect(list(initialState)).toEqual(personList);
    });

    it('should return loading flag', () => {
        expect(loading(initialState)).toEqual(true);
    });

    it('should return error', () => {
        expect(error(initialState)).toEqual(err);
    });

});
