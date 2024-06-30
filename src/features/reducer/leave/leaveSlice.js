/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { leaveService } from "../../api-service/profile-action/leaveAction";

const initialState = {
  leaveData: [],
  leaveDetail: {},
  yearlyLeaveDetail: {},
  isSuccess: false,
  isLoading: false,
};

export const getAllLeave = createAsyncThunk(
  "get_all_leave",
  async ({ populate }, thunkAPI) => {
    try {
      return await leaveService.getAllLeave({ populate });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleLeave = createAsyncThunk(
  "get_single_leave",
  async (id, thunkAPI) => {
    try {
      return await leaveService.getSingleLeave(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getYearlySingleLeave = createAsyncThunk(
  "get_yearly_single_leave",
  async (id, thunkAPI) => {
    try {
      return await leaveService.getYearlySingleLeave(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addLeave = createAsyncThunk(
  "add_leave",
  async (data, thunkAPI) => {
    try {
      return await leaveService.addLeave({ data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateEmployee = createAsyncThunk(
  "update_leave",
  async ({ id, data }, thunkAPI) => {
    try {
      return await leaveService.updateLeave(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Reset State
export const resetState = createAction("Reset_all_leave_state");

export const leaveSlice = createSlice({
  name: "leave",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllLeave.pending, (state) => {
        state.isLoading = true;
        state.leaveData = [];
      })
      .addCase(getAllLeave.fulfilled, (state, action) => {
        state.isLoading = false;
        state.leaveData = action?.payload?.data;
        state.isSuccess = true;
      })
      .addCase(getAllLeave.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.leaveData = [];
      })

      .addCase(getSingleLeave.pending, (state) => {
        state.isLoading = true;
        state.leaveDetail = {};
      })
      .addCase(getSingleLeave.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.leaveDetail = action?.payload?.data;
      })
      .addCase(getSingleLeave.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.leaveDetail = {};
      })

      .addCase(getYearlySingleLeave.pending, (state) => {
        state.isLoading = true;
        state.yearlyLeaveDetail = {};
      })
      .addCase(getYearlySingleLeave.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.yearlyLeaveDetail = action?.payload?.data;
      })
      .addCase(getYearlySingleLeave.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.yearlyLeaveDetail = {};
      })

      .addCase(addLeave.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addLeave.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addLeave.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })

      .addCase(updateEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateEmployee.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});

const leaveReducer = leaveSlice.reducer;

export default leaveReducer;
