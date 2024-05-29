import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { attendenceService } from "../../api-service/core-hr-action/attendenceAction";

const initialState = {
  allAttendence: [],
  singleAttendence: {},
  isLoading: false,
};

export const getAttendence = createAsyncThunk(
  "get_all_attendence",
  async (thunkAPI) => {
    try {
      return await attendenceService.getAllAttendence();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleAttendence = createAsyncThunk(
  "get_single_attendence",
  async (id, thunkAPI) => {
    try {
      return await attendenceService.getSingleAttendence(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addAttendence = createAsyncThunk(
  "add_attendence",
  async (data, thunkAPI) => {
    try {
      return await attendenceService.addAttendence({ data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const attendenceSlice = createSlice({
  name: "bank",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAttendence.pending, (state) => {
        state.isLoading = true;
        state.allAttendence = [];
      })
      .addCase(getAttendence.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bankDetails = action?.payload?.data;
      })
      .addCase(getAttendence.rejected, (state) => {
        state.isLoading = false;
        state.bankDetails = [];
      })

      // -----------------Single Bank----------------

      .addCase(getSingleAttendence.pending, (state) => {
        state.isLoading = true;
        state.singleAttendence = {};
      })
      .addCase(getSingleAttendence.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleAttendence = action?.payload?.data;
      })
      .addCase(getSingleAttendence.rejected, (state) => {
        state.isLoading = false;
        state.singleAttendence = {};
      })

      // -----------------Add Bank----------------

      .addCase(addAttendence.pending, (state) => {
        state.isLoading = true;
      })
      // eslint-disable-next-line no-unused-vars
      .addCase(addAttendence.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addAttendence.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

const attendenceReducer = attendenceSlice.reducer;

export default attendenceReducer;
