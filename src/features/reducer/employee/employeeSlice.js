import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { employeeService } from "../../api-service/employee-action/employeeAction";

const initialState = {
  employeeData: [],
  employeeDetail: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  statusCode: 0,
  message: "",
  token: "",
};

export const getAllEmployees = createAsyncThunk(
  "get_all_employee",
  async ({ populate }, thunkAPI) => {
    try {
      return await employeeService.getAllEmployee({ populate });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleEmployee = createAsyncThunk(
  "get_single_employee",
  async (id, thunkAPI) => {
    try {
      return await employeeService.getSingleEmployee(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addEmployee = createAsyncThunk(
  "add_employee",
  async (data, thunkAPI) => {
    try {
      return await employeeService.addEmployee({ data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateEmployee = createAsyncThunk(
  "update_employee",
  async ({ id, data }, thunkAPI) => {
    try {
      return await employeeService.updateEmployee(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Reset State
export const resetState = createAction("Reset_all_employee_state");

export const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEmployees.pending, (state) => {
        state.isLoading = true;
        state.employeeData = [];
      })
      .addCase(getAllEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.employeeData = action?.payload?.data;
        state.isSuccess = true;
      })
      .addCase(getAllEmployees.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.employeeData = [];
      })

      .addCase(getSingleEmployee.pending, (state) => {
        state.isLoading = true;
        state.employeeDetail = {};
      })
      .addCase(getSingleEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.employeeDetail = action?.payload?.data;
      })
      .addCase(getSingleEmployee.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.employeeDetail = {};
      })

      .addCase(addEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(addEmployee.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      .addCase(updateEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(updateEmployee.rejected, (state) => {
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

const employeeReducer = employeeSlice.reducer;

export default employeeReducer;
