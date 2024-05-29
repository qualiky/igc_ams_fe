import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import employeeReducer from "./employee/employeeSlice";
import bankReducer from "./employee/bankSlice";
import educationReducer from "./employee/educationSlice";
import attendenceReducer from "./core-hr/attendenceSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  employee: employeeReducer,
  bank: bankReducer,
  education: educationReducer,
  attendence: attendenceReducer,
});
