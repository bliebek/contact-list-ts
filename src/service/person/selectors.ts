import { RootState } from "./../root-reducer";
import { Person } from './types';

export const list = (state:RootState):Person[] => state.person.list;
export const loading = (state:RootState):boolean => state.person.loading;
export const error = (state:RootState):any => state.person.error;
