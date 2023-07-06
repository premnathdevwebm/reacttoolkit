import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Meeting at 9",
  },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => [
      ...state,
      {
        name: action.payload,
      },
    ],
  },
});

export const { addTask } = todoSlice.actions;

export default todoSlice.reducer;
