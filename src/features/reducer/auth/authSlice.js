import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { authService } from "../../api-service/auth-action/authActions";

const initialState = {
  user: [],
  isError: false,
  isAuthenticated: false,
  isSuccess: false,
  isLoading: false,
  statusCode: 0,
  message: "",
  token: "",
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (registerData, thunkAPI) => {
    try {
      return await authService.register(registerData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      return await authService.login(formData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logout", async (thunkAPI) => {
  try {
    return await authService.logout();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

//Reset State
export const resetState = createAction("Reset_all");

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register User
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.user = [];
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = !action.payload.success;
        state.isSuccess = action.payload.success;
        state.message = action.payload.message;
        state.statusCode = action.payload.status_code;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = action.payload.message;
      })

      //Login User
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = !action.payload.success;
        state.isSuccess = action.payload.success;
        state.message = action.payload.message;
        state.isAuthenticated = action.payload.success;
        state.user = action.payload.data;
        state.statusCode = action.payload.status_code;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      //Reset State
      .addCase(resetState, (state) => {
        state.message = "";
        state.isSuccess = false;
        state.statusCode = 0;
        state.isError = false;
      });
  },
});

export default authSlice.reducer;
