import { configureStore } from "@reduxjs/toolkit";
import catsSlice from "./slices/catsSlice";
import singleCatSlice from "./slices/singleCatSlice";
import statusSlice from "./slices/statusSlice";

const store = configureStore({
  reducer: {
    catsList: catsSlice.reducer,
    singleCat: singleCatSlice.reducer,
    pageStatus: statusSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
