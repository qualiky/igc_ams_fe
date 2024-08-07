import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import employeeReducer from "./employee/employeeSlice";
import bankReducer from "./employee/bankSlice";
import educationReducer from "./employee/educationSlice";
import attendenceReducer from "./core-hr/attendenceSlice";
import userReducer from "./profile/userProfileSlice";
import salesReducer from "./sales/salesSlice";
import leaveReducer from "./leave/leaveSlice";
import projectReducer from "./project/projectSlice";
import projectDetailReducer from "./project/projectDetailSlice";
import receiptReducer from "./receipt/receiptSlice";
import ClientReducer from "./client/clientSlice";
import ticketReducer from "./ticket/ticketSlice";
import invoiceReducer from "./invoice/invoiceSlice";
import chatReducer from "./chat/chatSlice";
import homeReducer from "./home/homeSlice";

export const rootReducer = combineReducers({
  home: homeReducer,
  auth: authReducer,
  user: userReducer,
  employee: employeeReducer,
  bank: bankReducer,
  education: educationReducer,
  attendence: attendenceReducer,
  sales: salesReducer,
  leave: leaveReducer,
  project: projectReducer,
  projectDetail: projectDetailReducer,
  receipt: receiptReducer,
  client: ClientReducer,
  ticket: ticketReducer,
  invoice: invoiceReducer,
  chat: chatReducer,
});
