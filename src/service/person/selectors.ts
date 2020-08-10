import { RootState } from "./../root-reducer";
import { Person } from "./types";

export const list = (state:RootState) => state.person.list;
export const loading = (state:RootState) => state.person.loading;
export const error = (state:RootState) => state.person.error;
export const selected = (state:RootState) => list(state).filter((r:Person) => r.selected);
