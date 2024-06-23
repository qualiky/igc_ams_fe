import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../../utils/base_url";
import { getConfigWithToken } from "../../../utils/config";

// Get All User
const getAllUser = async () => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.get(`${base_url}users`, config);
    return response.data;
  } catch (error) {
    console.error("Error during geting Users List:", error);
    throw error;
  }
};

//   Get single employee
const getSingleUser = async (id) => {
  try {
    const config = await getConfigWithToken();

    const response = await axios.get(`${base_url}users/${id}`, config);

    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Post Users
const addUser = async ({ data }) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(`${base_url}users`, data, config);
    if (response.status === 200) {
      toast.success(response?.message || "Users Added Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Update Users
const updateUser = async (id, data) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.put(
      `${base_url}users/${id}`,
      { data },
      config
    );
    if (response.status === 200) {
      toast.success(response?.message || "Users Updated Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Delete Users
const deleteUser = async (id) => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.delete(`${base_url}users/${id}`, config);
    return response.data;
  } catch (error) {
    console.error("Error during deleting user:", error);
    throw error;
  }
};

export const userService = {
  getAllUser,
  getSingleUser,
  addUser,
  updateUser,
  deleteUser,
};
