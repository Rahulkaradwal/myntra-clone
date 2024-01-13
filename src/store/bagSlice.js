import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      console.log(action.payload);
      return [...state, action.payload];
    },
  },
});

export const bagAction = bagSlice.actions;

export default bagSlice;
