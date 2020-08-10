import { RootState } from "./../root-reducer";

export const list = (state:RootState) => state.person.list;
export const loading = (state:RootState) => state.person.loading;
export const error = (state:RootState) => state.person.error;
