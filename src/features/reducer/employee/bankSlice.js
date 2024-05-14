import {
  createSlice,
  createAsyncThunk,
  createAction,
  current,
} from "@reduxjs/toolkit";
import { bankService } from "../../api-service/employee-action/bankAction";

const initialState = {
  bankDetails: [],
  singleBankDetail: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getBankDetails = createAsyncThunk(
  "get_bank_details",
  async (thunkAPI) => {
    try {
      return await bankService.getAllBankDetails();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleBankDetails = createAsyncThunk(
  "get_single_bank_details",
  async (id, thunkAPI) => {
    try {
      return await bankService.getSingleBankDetails(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addBankDetails = createAsyncThunk(
  "add_bank_details",
  async (data, thunkAPI) => {
    try {
      return await bankService.addBank({ data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateBankDetails = createAsyncThunk(
  "update_bank_details",
  async ({ id, data }, thunkAPI) => {
    try {
      return await bankService.updateBankDetails(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletBankDetails = createAsyncThunk(
  "delete_bank_details",
  async (id, thunkAPI) => {
    try {
      return await bankService.deleteBankDetails(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Reset State
export const resetBankState = createAction("Reset_all_bank_state");

export const bankSlice = createSlice({
  name: "bank",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBankDetails.pending, (state) => {
        state.isLoading = true;
        state.bankDetails = [];
      })
      .addCase(getBankDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.bankDetails = action?.payload?.data;
        state.isSuccess = true;
      })
      .addCase(getBankDetails.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.bankDetails = [];
      })

      // -----------------Single Bank----------------

      .addCase(getSingleBankDetails.pending, (state) => {
        state.isLoading = true;
        state.singleBankDetail = {};
      })
      .addCase(getSingleBankDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.singleBankDetail = action?.payload?.data;
        state.isSuccess = true;
      })
      .addCase(getSingleBankDetails.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.singleBankDetail = {};
      })

      // -----------------Delete Bank----------------
      .addCase(deletBankDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletBankDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        const updatedList = current(state).bankDetails?.filter(
          (item) => item?.id !== action?.payload?.data?.id
        );
        state.bankDetails = updatedList;
      })
      .addCase(deletBankDetails.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      // -----------------Update Bank----------------
      .addCase(updateBankDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBankDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleBankDetail = {};
      })
      .addCase(updateBankDetails.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      // -----------------Add Bank----------------

      .addCase(addBankDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBankDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(addBankDetails.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      //Reset State
      .addCase(resetBankState, (state) => {
        state.message = "";
        state.isSuccess = false;
        state.isError = false;
      });
  },
});

const bankReducer = bankSlice.reducer;

export default bankReducer;
