import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return state;
    },
  },
});
