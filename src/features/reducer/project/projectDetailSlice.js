/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { projectDetailService } from "../../api-service/project-action/projectDetailAction";

const initialState = {
  projectStages: {},
  taskDetail: {},
  isSuccess: false,
  isLoading: false,
};

export const getProjectStages = createAsyncThunk(
  "get_project_stages",
  async ({ id }, thunkAPI) => {
    try {
      return await projectDetailService.getAllProjectStages(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addProjectStage = createAsyncThunk(
  "add_project_stage",
  async (data, thunkAPI) => {
    try {
      return await projectDetailService.addProjectStage({ data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateProjectStage = createAsyncThunk(
  "update_project_stage",
  async ({ id, data }, thunkAPI) => {
    try {
      return await projectDetailService.updateProjectStage(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteProjectStage = createAsyncThunk(
  "delete_project_stage",
  async (id, thunkAPI) => {
    try {
      return await projectDetailService.deleteProjectStage(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// -----------------------------------------Project Stages Task----------------------------------

export const getProjectTaskDetail = createAsyncThunk(
  "get_project_task_detail",
  async (id, thunkAPI) => {
    try {
      return await projectDetailService.getSingleProjectTask(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addProjectTask = createAsyncThunk(
  "add_project_task",
  async (data, thunkAPI) => {
    try {
      return await projectDetailService.addProjectStageTask({ data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateProjectTask = createAsyncThunk(
  "update_project_task",
  async ({ id, data }, thunkAPI) => {
    try {
      return await projectDetailService.updateProjectStageTask(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteProjectTask = createAsyncThunk(
  "delete_project_task",
  async (id, thunkAPI) => {
    try {
      return await projectDetailService.deleteProjectStageTask(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Reset State
export const resetState = createAction("Reset_all_project_stage_state");

export const projectDetailSlice = createSlice({
  name: "projectDetail",
  initialState: initialState,
  reducers: {
    addProjectStage(state, action) {
      state.isSuccess = true;
      state.projectStages = [...state.projectStages, ...action.payload];
    },
    updateProjectStage(state, action) {
      state.isSuccess = true;
    },
    deleteProjectStage(state, action) {
      state.isSuccess = true;
    },
    addProjectStageTask(state, action) {
      state.isSuccess = true;
    },
    updateProjectStageTask(state, action) {
      state.isSuccess = true;
    },
    deleteProjectStageTask(state, action) {
      state.isSuccess = true;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProjectStages.pending, (state) => {
        state.isLoading = true;
        state.projectStages = [];
      })
      .addCase(getProjectStages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projectStages = action?.payload?.data;
        state.isSuccess = true;
      })
      .addCase(getProjectStages.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })

      .addCase(getProjectTaskDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProjectTaskDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getProjectTaskDetail.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});

const projectDetailReducer = projectDetailSlice.reducer;

export default projectDetailReducer;
