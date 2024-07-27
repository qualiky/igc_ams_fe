import {
  createSlice,
  createAsyncThunk,
  createAction,
  current,
} from "@reduxjs/toolkit";
import { userService } from "../../api-service/profile-action/userProfileAction";

const initialState = {
  allUser: [],
  singleUser: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const getAllUser = createAsyncThunk("get_all_user", async (thunkAPI) => {
  try {
    return await userService.getAllUser();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getSingleUser = createAsyncThunk(
  "get_single_user",
  async (id, thunkAPI) => {
    try {
      return await userService.getSingleUser(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addUser = createAsyncThunk("add_user", async (data, thunkAPI) => {
  try {
    return await userService.addUser({ data });
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateUser = createAsyncThunk(
  "update_user",
  async ({ id, data }, thunkAPI) => {
    try {
      return await userService.updateUser(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "delete_user",
  async (id, thunkAPI) => {
    try {
      return await userService.deleteUser(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Reset State
export const resetUserState = createAction("Reset_all_user_state");

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.allUser = action?.payload;
        state.isSuccess = true;
      })
      .addCase(getAllUser.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      // -----------------Single User----------------

      .addCase(getSingleUser.pending, (state) => {
        state.isLoading = true;
        state.singleUser = {};
      })
      .addCase(getSingleUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.singleUser = action?.payload?.data;
        state.isSuccess = true;
      })
      .addCase(getSingleUser.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      // -----------------Delete User----------------
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        const updatedList = current(state).allUser?.filter(
          (item) => item?.id !== action?.payload?.data?.id
        );
        state.allUser = updatedList;
      })
      .addCase(deleteUser.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      // -----------------Update User----------------
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleEducation = {};
      })
      .addCase(updateUser.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      //Reset State
      .addCase(resetUserState, (state) => {
        state.message = "";
        state.isSuccess = false;
        state.isError = false;
      });
  },
});

const userReducer = userSlice.reducer;

export default userReducer;
