import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { attendenceService } from "../../api-service/core-hr-action/attendenceAction";
import { homeService } from "../../api-service/home/home-action";

const initialState = {
  homeData: {},
  isLoading: true,
};

export const getAllHomeData = createAsyncThunk(
  "get_all_home_data",
  async (thunkAPI) => {
    try {
      return await homeService.getHomeData();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const homeeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllHomeData.pending, (state) => {})
      .addCase(getAllHomeData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.homeData = action?.payload;
      })
      .addCase(getAllHomeData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

const homeReducer = homeeSlice.reducer;

export default homeReducer;
