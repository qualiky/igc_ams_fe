import {
  createSlice,
  createAsyncThunk,
  createAction,
  current,
} from "@reduxjs/toolkit";

import { personalInformationService } from "../../api-service/employee-action/personalInfoAction";

const initialState = {
  allEducation: [],
  singlePersonalInformation: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getSinglePersonalInformation = createAsyncThunk(
  "get_single_personal_information",
  async (id, thunkAPI) => {
    try {
      return await personalInformationService.getSingleEducation(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addPersonalInformation = createAsyncThunk(
  "add_personal_information",
  async (data, thunkAPI) => {
    try {
      return await personalInformationService.addEducation({ data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updatePersonalInformation = createAsyncThunk(
  "update_personal_information",
  async ({ id, data }, thunkAPI) => {
    try {
      return await personalInformationService.updateEducation(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletePersonalInformation = createAsyncThunk(
  "delete_personal_information",
  async (id, thunkAPI) => {
    try {
      return await personalInformationService.deleteEducation(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Reset State
export const resetPersonalInformationState = createAction(
  "Reset_all_personal_info_state"
);

export const educationSlice = createSlice({
  name: "personalInfromation",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // -----------------Single Personal Information----------------
      .addCase(getSinglePersonalInformation.pending, (state) => {
        state.isLoading = true;
        state.singlePersonalInformation = {};
      })
      .addCase(getSinglePersonalInformation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.singlePersonalInformation = action?.payload?.data;
        state.isSuccess = true;
      })
      .addCase(getSinglePersonalInformation.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.singlePersonalInformation = {};
      })

      // -----------------Delete Personal Information----------------
      .addCase(deletePersonalInformation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePersonalInformation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        const updatedList = current(state).allEducation?.filter(
          (item) => item?.id !== action?.payload?.data?.id
        );
        state.allEducation = updatedList;
      })
      .addCase(deletePersonalInformation.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      // -----------------Update Personal Information----------------
      .addCase(updatePersonalInformation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePersonalInformation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleEducation = {};
      })
      .addCase(updatePersonalInformation.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      // -----------------Add Personal Information----------------

      .addCase(addPersonalInformation.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(addPersonalInformation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })

      .addCase(addPersonalInformation.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      //Reset State
      .addCase(resetPersonalInformationState, (state) => {
        state.message = "";
        state.isSuccess = false;
        state.isError = false;
      });
  },
});

const educationReducer = educationSlice.reducer;

export default educationReducer;
