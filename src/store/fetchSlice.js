import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    isLoading: false,
  },
  reducers: {
    markFetchingDone(state) {
      state.fetchDone = true; // Directly mutate the state
    },
    markFetchingStarted(state) {
      state.isLoading = true; // Directly mutate the state
    },
    markFetchingFinished(state) {
      state.isLoading = false; // Directly mutate the state
    },
  },
});

export const fetchAction = fetchStatusSlice.actions;

export default fetchStatusSlice;
