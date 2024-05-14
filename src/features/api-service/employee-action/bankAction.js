import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../../utils/base_url";
import { getConfigWithToken } from "../../../utils/config";

// Get All bank details
const getAllBankDetails = async () => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.get(
      `${base_url}bank-details?populate=*`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error during getiing bank details:", error);
    throw error;
  }
};

// Get single Bank detail
const getSingleBankDetails = async (id) => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.get(
      `${base_url}bank-details/${id}?populate=*`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error during getting single bank details:", error);
    throw error;
  }
};

// Update Bank Detail
const updateBankDetails = async (id, data) => {
  const config = await getConfigWithToken();
  console.log(id, data);
  try {
    const response = await axios.put(
      `${base_url}bank-details/${id}`,
      { data },
      config
    );
    if (response.status === 200) {
      toast.success(response?.message || "Bank Detail Updated Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    console.error("Error during updating single bank details:", error);
    throw error;
  }
};

// Delete Bank Detail
const deleteBankDetails = async (id) => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.delete(
      `${base_url}bank-details/${id}`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error during deleting single bank details:", error);
    throw error;
  }
};

// Post Bank Details
const addBank = async ({ data }) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(`${base_url}bank-details`, data, config);
    if (response.status === 200) {
      toast.success(response?.message || "Bank Account Added Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

export const bankService = {
  addBank,
  getAllBankDetails,
  getSingleBankDetails,
  updateBankDetails,
  deleteBankDetails,
};
