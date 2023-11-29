import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer as auth } from './auth';

export const store = configureStore({
  reducer: combineReducers({ auth }),
});
