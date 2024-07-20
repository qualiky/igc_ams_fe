import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../../utils/base_url";
import { getConfigWithToken } from "../../../utils/config";

// Get All Project Stages
const getAllProjectStages = async (id) => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.get(
      `${base_url}project-stages?populate[project][filers][id][$eq]=${id}&populate[projectTasks][fields][0]=taskTitle&populate[projectTasks][fields][1]=startDate&populate[projectTasks][fields][2]=endDate&populate[projectTasks][fields][3]=priority&populate[projectTasks][fields][4]=taskDescription&fields[0]=projectStageName`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error during getting project data:", error);
    throw error;
  }
};

// Post Project Stage
const addProjectStage = async ({ data }) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(`${base_url}projects`, data, config);
    if (response.status === 200) {
      toast.success(response?.message || "Project Stage Added Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Delete Project Stage
const deleteProjectStage = async (id) => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.delete(`${base_url}lead-stages/${id}`, config);
    return response.data;
  } catch (error) {
    console.error("Error during deleting single bank details:", error);
    throw error;
  }
};

// Update Project stage
const updateProjectStage = async (id, data) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.put(
      `${base_url}project-tasks/${id}`,
      { data },
      config
    );
    if (response.status === 200) {
      toast.success(response?.message || "Project Stage Updated Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};
// ---------------------------------------------------------------Stages Tasks-------------------------------------------------------

//   Get single Project Task
const getSingleProjectTask = async (id) => {
  try {
    const config = await getConfigWithToken();

    const response = await axios.get(
      `${base_url}project-tasks/${id}?filters[taskId][$eq]=${id}&populate[tags][fields][0]=tagTitle&populate[comments][fields][0]=commenter&populate[comments][fields][1]=commentId&populate[comments][fields][2]=comment&populate[comments][fields][3]=createdAt&populate[comments][populate][commenter][fields][0]=firstName&populate[comments][populate][commenter][fields][1]=lastName&populate[comments][populate][commenter][populate][profileImage][populate][data][populate][attributes][field][0]=url&populate[projectStage][fields][0]=projectStageName&fields[0]=taskId&fields[1]=taskTitle&fields[2]=startDate&fields[3]=endDate&fields[4]=priority&fields[5]=taskDescription`,
      config
    );

    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Post Project Taks
const addProjectStageTask = async ({ data }) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(
      `${base_url}project-tasks`,
      { data },
      config
    );
    if (response.status === 200) {
      toast.success(response?.message || "Project Added Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Update Project stage Task
const updateProjectStageTask = async (id, data) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.put(
      `${base_url}projects/${id}`,
      { data },
      config
    );
    if (response.status === 200) {
      toast.success(response?.message || "Project Updated Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Delete Project Stage tasks
const deleteProjectStageTask = async (id) => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.delete(`${base_url}lead-stages/${id}`, config);
    return response.data;
  } catch (error) {
    console.error("Error during deleting single bank details:", error);
    throw error;
  }
};

const addTaskComment = async ({ data }) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(`${base_url}comments`, { data }, config);
    if (response.status === 200) {
      toast.success(response?.message || "Comment Added Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

export const projectDetailService = {
  getAllProjectStages,
  addProjectStage,
  updateProjectStage,
  deleteProjectStage,

  getSingleProjectTask,
  addProjectStageTask,
  updateProjectStageTask,
  deleteProjectStageTask,
  addTaskComment,
};
