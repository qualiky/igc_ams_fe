import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../../utils/base_url";
import { getConfigWithToken } from "../../../utils/config";

// Get All bank details
const getAllEducation = async () => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.get(
      `${base_url}educations?populate=*`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error during getiing Education:", error);
    throw error;
  }
};

// Get single Bank detail
const getSingleEducation = async (id) => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.get(
      `${base_url}educations/${id}?populate=*`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error during getting single Education:", error);
    throw error;
  }
};

// Update Bank Detail
const updateEducation = async (id, data) => {
  const config = await getConfigWithToken();
  console.log(id, data);
  try {
    const response = await axios.put(
      `${base_url}educations/${id}`,
      { data },
      config
    );
    if (response.status === 200) {
      toast.success(response?.message || "Education Updated Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    console.error("Error during updating single Education:", error);
    throw error;
  }
};

// Delete Bank Detail
const deleteEducation = async (id) => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.delete(
      `${base_url}bank-details/${id}`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error during deleting single Education:", error);
    throw error;
  }
};

// Post Bank Details
const addEducation = async ({ data }) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(`${base_url}education`, data, config);
    if (response.status === 200) {
      toast.success(response?.message || "Education Added Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

export const educationService = {
  getAllEducation,
  getSingleEducation,
  updateEducation,
  deleteEducation,
  addEducation,
};
