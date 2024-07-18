/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { projectService } from "../../api-service/project-action/projectAction";

const initialState = {
  projects: [],
  isSuccess: false,
  isLoading: false,
  isSidebarOpen: false,
};

export const getAllProject = createAsyncThunk(
  "get_all_Project",
  async ({ populate }, thunkAPI) => {
    try {
      return await projectService.getAllProject({ populate });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleProject = createAsyncThunk(
  "get_single_project",
  async (id, thunkAPI) => {
    try {
      return await projectService.getSingleProject(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addProject = createAsyncThunk(
  "add_project",
  async (data, thunkAPI) => {
    try {
      return await projectService.addProject({ data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateProject = createAsyncThunk(
  "update_project",
  async ({ id, data }, thunkAPI) => {
    try {
      return await projectService.updateProject(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Reset State
export const resetState = createAction("Reset_all_project_state");

export const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    toogleSidbar(state, action) {
      state.isSidebarOpen(!state.isSidebarOpen);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProject.pending, (state) => {
        state.isLoading = true;
        state.projects = [];
      })
      .addCase(getAllProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects = action?.payload?.data;
        state.isSuccess = true;
      })
      .addCase(getAllProject.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.projects = [];
      })

      .addCase(addProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addProject.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })

      .addCase(updateProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateProject.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});

const projectReducer = projectSlice.reducer;

export const { toogleSidbar } = projectSlice.actions;

export default projectReducer;
