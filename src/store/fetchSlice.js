import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    isLoading: false,
  },
  reducers: {
    markFetchingDone(state) {
      return state;
    },
    markFetchingStarted(state) {
      return state;
    },
    markFetchingFinished(state) {
      return state;
    },
  },
});

export const fetchAction = fetchStatusSlice.actions;

export default fetchStatusSlice;
