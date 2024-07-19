/* eslint-disable no-unused-vars */
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../../utils/base_url";
import { getConfigWithToken } from "../../../utils/config";

// Get All Client
const getAllClient = async () => {
  const config = await getConfigWithToken();

  try {
    const response = await axios.get(`${base_url}clients`, config);
    return response.data;
  } catch (error) {
    console.error("Error during getting Client data:", error);
    throw error;
  }
};

//   Get single Client
const getSingleClient = async (id) => {
  try {
    const config = await getConfigWithToken();

    const response = await axios.get(
      `${base_url}clients/${id}?populate=deep`,
      config
    );

    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Post Client
const addClient = async ({ data }) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(`${base_url}clients`, data, config);
    if (response.status === 200) {
      toast.success(response?.message || "Client Added Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Update Client
const updateClient = async (id, data) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.put(
      `${base_url}clients/${id}`,
      { data },
      config
    );
    if (response.status === 200) {
      toast.success(response?.message || "Client Updated Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

export const ClientService = {
  getAllClient,
  getSingleClient,
  addClient,
  updateClient,
};
