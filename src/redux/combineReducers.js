import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./features/slices/counterSlice";
import authLoginSlice from "./features/slices/authLoginSlice";
import authRegisterSlice from "./features/slices/authRegisterSlice";

export const reducers = combineReducers({
  couter: counterSlice,
  loggedInUser: authLoginSlice,
  registerUser: authRegisterSlice,
});
