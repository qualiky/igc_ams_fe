/* eslint-disable no-unused-vars */
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../../utils/base_url";
import { getConfigWithToken } from "../../../utils/config";

// Get All Receipt
const getAllReceipt = async () => {
  const config = await getConfigWithToken();

  try {
    const response = await axios.get(`${base_url}receipts`, config);
    return response.data;
  } catch (error) {
    console.error("Error during getting Receipt data:", error);
    throw error;
  }
};

//   Get single Receipt
const getSingleReceipt = async (id) => {
  try {
    const config = await getConfigWithToken();

    const response = await axios.get(
      `${base_url}receipts/${id}?populate=deep`,
      config
    );

    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Post Receipt
const addReceipt = async ({ data }) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(`${base_url}receipts`, { data }, config);
    if (response.status === 200) {
      toast.success(response?.message || "Receipt Added Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Update Receipt
const updateReceipt = async (id, data) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.put(
      `${base_url}receipts/${id}`,
      { data },
      config
    );
    if (response.status === 200) {
      toast.success(response?.message || "Receipt Updated Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Get Receipt Analytics
const getReceiptAnalytics = async () => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.get(
      `${base_url}receipts/date/analytics?startDate=2024-06-01&endDate=2024-07-30`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error during Receipt Analytics:", error);
    throw error;
  }
};

export const ReceiptService = {
  getAllReceipt,
  getSingleReceipt,
  addReceipt,
  updateReceipt,
  getReceiptAnalytics,
};
