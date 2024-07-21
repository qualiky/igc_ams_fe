export const getLoginData = (state) => state?.auth;

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

// Client
export const getAllClientList = (state) => state.client;

// Ticket
export const getAllTicketList = (state) => state.ticket.tickets;
