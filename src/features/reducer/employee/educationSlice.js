import {
  createSlice,
  createAsyncThunk,
  createAction,
  current,
} from "@reduxjs/toolkit";
import { educationService } from "../../api-service/employee-action/educationAction";

const initialState = {
  allEducation: [],
  singleEducation: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getEducation = createAsyncThunk(
  "get_all_education",
  async (thunkAPI) => {
    try {
      return await educationService.getAllEducation();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleEducation = createAsyncThunk(
  "get_single_education",
  async (id, thunkAPI) => {
    try {
      return await educationService.getSingleEducation(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addEducation = createAsyncThunk(
  "add_education",
  async (data, thunkAPI) => {
    try {
      return await educationService.addEducation({ data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateEducation = createAsyncThunk(
  "update_education",
  async ({ id, data }, thunkAPI) => {
    try {
      return await educationService.updateEducation(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteEducation = createAsyncThunk(
  "delete_education",
  async (id, thunkAPI) => {
    try {
      return await educationService.deleteEducation(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Reset State
export const resetEducationState = createAction("Reset_all_education_state");

export const educationSlice = createSlice({
  name: "education",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEducation.pending, (state) => {
        state.isLoading = true;
        state.allEducation = [];
      })
      .addCase(getEducation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.allEducation = action?.payload?.data;
        state.isSuccess = true;
      })
      .addCase(getEducation.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.allEducation = [];
      })

      // -----------------Single Bank----------------

      .addCase(getSingleEducation.pending, (state) => {
        state.isLoading = true;
        state.singleEducation = {};
      })
      .addCase(getSingleEducation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.singleEducation = action?.payload?.data;
        state.isSuccess = true;
      })
      .addCase(getSingleEducation.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.singleEducation = {};
      })

      // -----------------Delete Bank----------------
      .addCase(deleteEducation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEducation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        const updatedList = current(state).allEducation?.filter(
          (item) => item?.id !== action?.payload?.data?.id
        );
        state.allEducation = updatedList;
      })
      .addCase(deleteEducation.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      // -----------------Update Bank----------------
      .addCase(updateEducation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEducation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleEducation = {};
      })
      .addCase(updateEducation.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      // -----------------Add Bank----------------

      .addCase(addEducation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addEducation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(addEducation.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      //Reset State
      .addCase(resetEducationState, (state) => {
        state.message = "";
        state.isSuccess = false;
        state.isError = false;
      });
  },
});

const educationReducer = educationSlice.reducer;

export default educationReducer;
