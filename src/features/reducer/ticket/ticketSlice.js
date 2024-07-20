/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { ticketService } from "../../api-service/ticket/ticketAction";

const initialState = {
  tickets: [],
  ticketDetail: {},
  isSuccess: false,
  isLoading: false,
  isSidebarOpen: false,
};

export const getAllTicket = createAsyncThunk(
  "get_all_Ticket",
  async (thunkAPI) => {
    try {
      return await ticketService.getAllTicket();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleTicket = createAsyncThunk(
  "get_single_Ticket",
  async (id, thunkAPI) => {
    try {
      return await ticketService.getSingleTicket(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addTicket = createAsyncThunk(
  "add_Ticket",
  async (data, thunkAPI) => {
    try {
      return await ticketService.addTicket({ data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateTicket = createAsyncThunk(
  "update_Ticket",
  async ({ id, data }, thunkAPI) => {
    try {
      return await ticketService.updateTicket(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Reset State
export const resetState = createAction("Reset_all_ticket_state");

export const ticketSlice = createSlice({
  name: "ticket",
  initialState: initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAllTicket.pending, (state) => {
        state.isLoading = true;
        state.tickets = [];
      })
      .addCase(getAllTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tickets = action?.payload?.data;
        state.isSuccess = true;
      })
      .addCase(getAllTicket.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.tickets = [];
      })

      .addCase(getSingleTicket.pending, (state) => {
        state.isLoading = true;
        state.ticketDetail = {};
      })
      .addCase(getSingleTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ticketDetail = action?.payload?.data;
        state.isSuccess = true;
      })
      .addCase(getSingleTicket.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.ticketDetail = {};
      })

      .addCase(addTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addTicket.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })

      .addCase(updateTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateTicket.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});

const ticketReducer = ticketSlice.reducer;

export default ticketReducer;
