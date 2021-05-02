import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    // Since immer & toolkit returned new mutated state to redux
    // I don't need to return new state myself
    // If return mutated state, Error
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    // I return a new state, It's OK
    state.filter((toDo) => toDo.id !== action.payload),
});

const store = configureStore({ reducer });

export const actionCreaTors = {
  addToDo,
  deleteToDo,
};
export default store;
