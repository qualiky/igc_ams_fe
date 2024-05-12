import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import employeeReducer from "./employee/employeeSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  employee: employeeReducer,
});
