import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { salesService } from "../../api-service/sales-action/salesAction";

const initialState = {
  salesLead: [],
  singleSalesLead: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const getSalesLead = createAsyncThunk(
  "get_sales_lead",
  async (thunkAPI) => {
    try {
      return await salesService.getALlSalesLeads();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleSalesLead = createAsyncThunk(
  "get_single_sales_lead",
  async (id, thunkAPI) => {
    try {
      return await salesService.getSingleSalesLead(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addSalesLead = createAsyncThunk(
  "add_sales_lead",
  async (data, thunkAPI) => {
    try {
      return await salesService.addSalesLead({ data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateSalesLead = createAsyncThunk(
  "update_sales_lead",
  async ({ id, data }, thunkAPI) => {
    try {
      return await salesService.updateSalesLead(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteSalesLead = createAsyncThunk(
  "delete_sales_lead",
  async (id, thunkAPI) => {
    try {
      return await salesService.deleteSalesLead(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Reset State
export const resetSalesLeadState = createAction("Reset_Sales_Lead");

export const bankSlice = createSlice({
  name: "sales",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSalesLead.pending, (state) => {
        state.isLoading = true;
        state.salesLead = [];
      })
      .addCase(getSalesLead.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.salesLead = action?.payload?.data;
        state.isSuccess = true;
      })
      .addCase(getSalesLead.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.salesLead = [];
      })

      // -----------------Single Lead Sales----------------

      .addCase(getSingleSalesLead.pending, (state) => {
        state.isLoading = true;
        state.singleSalesLead = {};
      })
      .addCase(getSingleSalesLead.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.singleSalesLead = action?.payload?.data;
        state.isSuccess = true;
      })
      .addCase(getSingleSalesLead.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.singleSalesLead = {};
      })

      // -----------------Delete Sales Lead----------------
      .addCase(deleteSalesLead.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteSalesLead.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // const updatedList = current(state).salesLead?.filter(
        //   (item) => item?.id !== action?.payload?.data?.id
        // );
        // state.salesLead = updatedList;
      })
      .addCase(deleteSalesLead.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      // -----------------Update Sales----------------
      .addCase(updateSalesLead.pending, (state) => {
        state.isLoading = false;
      })
      // eslint-disable-next-line no-unused-vars
      .addCase(updateSalesLead.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleSalesLead = {};
      })
      .addCase(updateSalesLead.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      // -----------------Add Sale Lead----------------

      .addCase(addSalesLead.pending, (state) => {
        state.isLoading = true;
      })
      // eslint-disable-next-line no-unused-vars
      .addCase(addSalesLead.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(addSalesLead.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      //Reset State
      .addCase(resetSalesLeadState, (state) => {
        state.message = "";
        state.isSuccess = false;
        state.isError = false;
      });
  },
});

const salesReducer = bankSlice.reducer;

export default salesReducer;
