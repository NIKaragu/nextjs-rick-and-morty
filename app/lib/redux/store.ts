import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { charSlice } from "./slices/characters";

const rootReducer = combineSlices(charSlice);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;
