/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { invoiceService } from "../../api-service/invoice_ai/invoice-action";

const initialState = {
  invoiceData: {},
  isSuccess: false,
  isLoading: false,
};

export const postInvoice = createAsyncThunk(
  "post_invoice",
  async (data, thunkAPI) => {
    try {
      return await invoiceService.sendInvoice({ data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Reset State
export const resetState = createAction("Reset_all_invoice_state");

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postInvoice.pending, (state) => {
        state.isLoading = true;
        state.invoiceData = {};
      })
      .addCase(postInvoice.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.invoiceData = action?.payload?.data;
        console.log(action.payload);
        state.isSuccess = true;
      })
      .addCase(postInvoice.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.invoiceData = {};
      });
  },
});

const invoiceReducer = invoiceSlice.reducer;

export default invoiceReducer;
