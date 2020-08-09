import { GenericAction, GenericActionListSuccess, GenericActionError } from './../types';
import { PersonState, Person } from './types';

const initialPersonState: PersonState = {
    list: [],
    loading: false,
    error: undefined
}

const getPersonList = ():GenericAction => ({
    type: 'PERSON_LIST'
});

const getPersonListRequest = ():GenericAction => ({
    type: 'PERSON_LIST_REQUEST'
});

const getPersonListSuccess = (data:Person[]):GenericActionListSuccess<Person> => ({
    type: 'PERSON_LIST_SUCCESS',
    data
});

const getPersonListError = (e:Error):GenericActionError => ({
    type: 'PERSON_LIST_ERROR',
    e
});

const personReducer = (state: PersonState = initialPersonState, action: any) => {
    switch (action.type) {
        case 'PERSON_LIST_REQUEST':
            return { ...state, loading: true, error: undefined };
        case 'PERSON_LIST_SUCCESS':
            console.log('success', state.list.length, state.list, state.list.concat(action.data))
            return { ...state, loading: false, error: undefined, list: state.list.concat(action.data) };
        case 'PERSON_LIST_ERROR':
            return { ...state, loading: false, error: action.e };
        default:
            return state;
    }
};

export { getPersonList }
export { getPersonListRequest }
export { getPersonListSuccess }
export { getPersonListError }
export { personReducer }
