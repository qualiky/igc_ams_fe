import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../../utils/base_url";
import { getConfigWithToken } from "../../../utils/config";

// Get All Project
const getAllProject = async ({ populate }) => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.get(
      `${base_url}projects?populate=${populate ?? "*"}`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error during getting project data:", error);
    throw error;
  }
};

//   Get single Project
const getSingleProject = async (id) => {
  try {
    const config = await getConfigWithToken();

    const response = await axios.get(
      `${base_url}projects/${id}?populate=deep`,
      config
    );

    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Post Project
const addProject = async ({ data }) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(`${base_url}projects`, data, config);
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

// Update Project
const updateProject = async (id, data) => {
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

export const projectService = {
  getAllProject,
  getSingleProject,
  addProject,
  updateProject,
};
