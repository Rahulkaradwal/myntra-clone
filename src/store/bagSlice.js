import { createSlice } from "@reduxjs/toolkit";

export const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});
