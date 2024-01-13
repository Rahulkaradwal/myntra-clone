import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    isLoading: false,
  },
  reducers: {
    markFetchingDone(state) {
      return (state.fetchDone = true);
    },
    markFetchingStarted(state) {
      return (state.isLoading = true);
    },
    markFetchingFinished(state) {
      return (state.isLoading = false);
    },
  },
});

export const fetchAction = fetchStatusSlice.actions;

export default fetchStatusSlice;
