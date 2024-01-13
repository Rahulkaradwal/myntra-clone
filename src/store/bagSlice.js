import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      console.log(action.payload);
      state.pop(action.payload);
    },
    removeFromBag: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const bagAction = bagSlice.actions;

export default bagSlice;
