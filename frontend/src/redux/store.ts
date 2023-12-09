import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer as auth } from './auth';
import { menuReducer as menu } from './menu';
import { bracketReducer as bracket } from './bracket';

export const store = configureStore({
  reducer: combineReducers({ auth, menu, bracket }),
});
