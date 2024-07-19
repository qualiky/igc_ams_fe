/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { ClientService } from "../../api-service/client-action/client-action";

const initialState = {
  allClient: [],
  clientDetail: {},
  isSuccess: false,
  isLoading: false,
};

export const getAllClient = createAsyncThunk(
  "get_all_Client",
  async (thunkAPI) => {
    try {
      return await ClientService.getAllClient();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleClient = createAsyncThunk(
  "get_single_Client",
  async (id, thunkAPI) => {
    try {
      return await ClientService.getSingleClient(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addClient = createAsyncThunk(
  "add_Client",
  async (data, thunkAPI) => {
    try {
      return await ClientService.addClient({ data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateEmployee = createAsyncThunk(
  "update_Client",
  async ({ id, data }, thunkAPI) => {
    try {
      return await ClientService.updateClient(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Reset State
export const resetState = createAction("Reset_all_Client_state");

export const Clientlice = createSlice({
  name: "client",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllClient.pending, (state) => {
        state.isLoading = true;
        state.allClient = [];
      })
      .addCase(getAllClient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allClient = action?.payload?.data;
        state.isSuccess = true;
      })
      .addCase(getAllClient.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.allClient = [];
      })

      .addCase(getSingleClient.pending, (state) => {
        state.isLoading = true;
        state.clientDetail = {};
      })
      .addCase(getSingleClient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.clientDetail = action?.payload?.data;
      })
      .addCase(getSingleClient.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.clientDetail = {};
      })

      .addCase(addClient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addClient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addClient.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});

const ClientReducer = Clientlice.reducer;

export default ClientReducer;
