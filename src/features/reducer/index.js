import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import employeeReducer from "./employee/employeeSlice";
import bankReducer from "./employee/bankSlice";
import educationReducer from "./employee/educationSlice";
import attendenceReducer from "./core-hr/attendenceSlice";
import userReducer from "./profile/userProfileSlice";
import salesReducer from "./sales/salesSlice";
import leaveReducer from "./leave/leaveSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  employee: employeeReducer,
  bank: bankReducer,
  education: educationReducer,
  attendence: attendenceReducer,
  sales: salesReducer,
  leave: leaveReducer,
});
