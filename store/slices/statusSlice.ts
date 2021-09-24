import { createSlice } from "@reduxjs/toolkit";

interface Status {
  loading: boolean;
  error: null | string;
}

const initialState: Status = {
  loading: false,
  error: null,
};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    toggleLoading(state) {
      state.loading = !state.loading;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const statusActions = statusSlice.actions;
export default statusSlice;
