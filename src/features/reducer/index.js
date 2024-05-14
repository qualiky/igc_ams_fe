import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import employeeReducer from "./employee/employeeSlice";
import bankReducer from "./employee/bankSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  employee: employeeReducer,
  bank: bankReducer,
});
