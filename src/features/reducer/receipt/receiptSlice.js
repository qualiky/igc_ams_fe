/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { ReceiptService } from "../../api-service/receipt-action/receipt-action";

const initialState = {
  allReceipts: [],
  expenditureReceipts: [],
  incomeReceipts: [],
  receiptDetail: {},
  receiptAnalytics: [],
  isSuccess: false,
  isLoading: false,
};

export const getAllReceipt = createAsyncThunk(
  "get_all_Receipt",
  async (thunkAPI) => {
    try {
      return await ReceiptService.getAllReceipt();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleReceipt = createAsyncThunk(
  "get_single_Receipt",
  async (id, thunkAPI) => {
    try {
      return await ReceiptService.getSingleReceipt(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addReceipt = createAsyncThunk(
  "add_Receipt",
  async (data, thunkAPI) => {
    try {
      return await ReceiptService.addReceipt({ data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateEmployee = createAsyncThunk(
  "update_Receipt",
  async ({ id, data }, thunkAPI) => {
    try {
      return await ReceiptService.updateReceipt(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getReceiptAnalytics = createAsyncThunk(
  "get_Receipt_analytics",
  async (thunkAPI) => {
    try {
      return await ReceiptService.getReceiptAnalytics();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Reset State
export const resetState = createAction("Reset_all_Receipt_state");

export const receiptSlice = createSlice({
  name: "receipt",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllReceipt.pending, (state) => {
        state.isLoading = true;
        state.allReceipts = [];
        state.expenditureReceipts = [];
        state.incomeReceipts = [];
      })
      .addCase(getAllReceipt.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allReceipts = action?.payload?.data;
        state.expenditureReceipts = state.allReceipts.filter(
          (receipt) => receipt?.attributes?.receiptType === "Expenditure"
        );
        state.incomeReceipts = state.allReceipts.filter(
          (receipt) => receipt?.attributes?.receiptType === "Income"
        );
        state.isSuccess = true;
      })
      .addCase(getAllReceipt.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.allReceipts = [];
        state.expenditureReceipts = [];
        state.incomeReceipts = [];
      })

      .addCase(getSingleReceipt.pending, (state) => {
        state.isLoading = true;
        state.receiptDetail = {};
      })
      .addCase(getSingleReceipt.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.receiptDetail = action?.payload?.data;
      })
      .addCase(getSingleReceipt.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.receiptDetail = {};
      })

      .addCase(addReceipt.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addReceipt.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addReceipt.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })

      .addCase(getReceiptAnalytics.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReceiptAnalytics.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.receiptAnalytics = action?.payload;
      })
      .addCase(getReceiptAnalytics.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});

const receiptReducer = receiptSlice.reducer;

export default receiptReducer;
