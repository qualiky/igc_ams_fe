import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../../utils/base_url";
import { getConfigWithToken } from "../../../utils/config";

// Get All Sales Lead
const getALlSalesLeads = async () => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.get(
      `${base_url}lead-stages?populate=*`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error during getiing Sales Lead data:", error);
    throw error;
  }
};

// Get single sales lead
const getSingleSalesLead = async (id) => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.get(
      `${base_url}lead-companies/${id}?populate=*`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error during getting single sales lead data:", error);
    throw error;
  }
};

// Update Sales lead
const updateSalesLead = async (id, data) => {
  const config = await getConfigWithToken();

  try {
    const response = await axios.put(
      `${base_url}lead-companies/${id}`,
      { data },
      config
    );
    if (response.status === 200) {
      toast.success(response?.message || "Sales lead updated successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    console.error("Error during updating sales lead:", error);
    throw error;
  }
};

// Delete Sales lead
const deleteSalesLead = async (id) => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.delete(`${base_url}lead-stages/${id}`, config);
    return response.data;
  } catch (error) {
    console.error("Error during deleting single bank details:", error);
    throw error;
  }
};

// Post sales lead
const addSalesLead = async ({ data }) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(
      `${base_url}lead-companies`,
      data,
      config
    );
    if (response.status === 200) {
      toast.success(response?.message || "Sales Lead Added Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

export const salesService = {
  addSalesLead,
  getALlSalesLeads,
  getSingleSalesLead,
  updateSalesLead,
  deleteSalesLead,
};
