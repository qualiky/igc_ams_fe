export const getLoginData = (state) => state?.auth;
export const getCurrentUser = (state) => state.auth;

// Home
export const getHomeData = (state) => state?.home.homeData;

export const selectJwtToken = (state) => state.auth.token;

export const getAllEmployeeData = (state) => state?.employee;

// Bank
export const getBankDetail = (state) => state?.bank;

export const getSingleBankDetail = (state) => state?.bank;

// Education
export const getSingleEducationDetail = (state) => state.education;

// Attendence
export const getALlAttendence = (state) => state.attendence;

// Sales Lead
export const getAllSalesLead = (state) => state.sales;
export const getSingleLead = (state) => state.sales;

// Leave
export const getAllLeaveData = (state) => state.leave;
export const getSingleLeaveData = (state) => state.leave;

// Project
export const getAllProjectList = (state) => state?.project;
export const getProjectStage = (state) => state.projectDetail.projectStages;
export const getTaskDetail = (state) => state.projectDetail.taskDetail;

// Receipt
export const getAllReceiptList = (state) => state.receipt.allReceipts;
export const getAllIncomeReceipt = (state) => state.receipt;
export const getAllExpenditureReceipt = (state) =>
  state.receipt.expenditureReceipts;
export const getReceiptAnalyticsData = (state) =>
  state.receipt?.receiptAnalytics;

// Client
export const getAllClientList = (state) => state.client;

// Ticket
export const getAllTicketList = (state) => state.ticket;
export const getTicketDetail = (state) => state.ticket;

// Chat
export const getAllChatRoomList = (state) => state.chat;
