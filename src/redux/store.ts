import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { useAppSelector } from "./hooks";

import { countriesReducer } from './reducers/countries';

export const store = configureStore({
  // const countries = useAppSelector(state => state.countriesReducer)
  reducer: {
    countriesReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;