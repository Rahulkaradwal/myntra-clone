import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: DEFAULT_ITEMS,
  },
  reducers: {
    addInitialItems: (state, action) => {
      return state;
    },
  },
});

export const itemAction = itemSlice.actions;

export default itemSlice;
