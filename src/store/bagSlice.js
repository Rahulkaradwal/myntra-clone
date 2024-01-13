import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
  },
});

export const bagAction = bagSlice.actions;

export default bagSlice;
