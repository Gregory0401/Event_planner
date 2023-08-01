import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("card")) || [];
const addTodoReducer = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            task: action.payload.task,
          };
        }
        return todo;
      });
    },
  },
});

export const { updateTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
