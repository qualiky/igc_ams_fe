import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { employeeService } from "../../api-service/employee-action/employeeAction";

const initialState = {
  employee: [],
  employeeDetail: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  statusCode: 0,
  message: "",
  token: "",
};

export const getEmployees = createAsyncThunk(
  "get_all_employee",
  async (thunkAPI) => {
    try {
      return await employeeService.getAllEmployee();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getEmployee = createAsyncThunk(
  "get_single_employee",
  async (thunkAPI) => {
    try {
      return await employeeService.getAllEmployee();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Reset State
export const resetState = createAction("Reset_all");

export const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmployees.pending, (state) => {
        state.isLoading = true;
        state.user = [];
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.employee = action?.payload?.data;
        state.isSuccess = true;
      })
      .addCase(getEmployees.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      .addCase(getEmployee.pending, (state) => {
        state.isLoading = true;
        state.employeeDetail = {};
      })
      .addCase(getEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.employeeDetail = action?.payload?.data;
      })
      .addCase(getEmployee.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      //Reset State
      .addCase(resetState, (state) => {
        state.message = "";
        state.isSuccess = false;
        state.statusCode = 0;
        state.isError = false;
      });
  },
});

export default employeeSlice.reducer;
