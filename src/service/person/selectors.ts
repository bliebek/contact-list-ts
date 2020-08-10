import { RootState } from "./../root-reducer";
import { Person } from "./types";

const orderById = (l:Person, r:Person) => Number(l.id) > Number(r.id) ? 1 : -1;

export const list = (state:RootState) => state.person.list;
export const loading = (state:RootState) => state.person.loading;
export const error = (state:RootState) => state.person.error;
export const selected = (state:RootState) => list(state).filter((r:Person) => r.selected).sort(orderById);
export const deselected = (state:RootState) => list(state).filter((r:Person) => !r.selected).sort(orderById);
