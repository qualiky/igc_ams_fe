import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../../utils/base_url";
import { getConfigWithToken } from "../../../utils/config";

// Get All Ticket
const getAllTicket = async () => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.get(`${base_url}tickets?populate=*`, config);
    return response.data;
  } catch (error) {
    console.error("Error during getting Ticket data:", error);
    throw error;
  }
};

//   Get single Ticket
const getSingleTicket = async (id) => {
  try {
    const config = await getConfigWithToken();

    const response = await axios.get(
      `${base_url}tickets/${id}?populate=deep`,
      config
    );

    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Post Ticket
const addTicket = async ({ data }) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(`${base_url}tickets`, { data }, config);
    if (response.status === 200) {
      toast.success(response?.message || "Ticket Added Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Update Ticket
const updateTicket = async (id, data) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.put(
      `${base_url}tickets/${id}`,
      { data },
      config
    );
    if (response.status === 200) {
      toast.success(response?.message || "Ticket Updated Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

export const ticketService = {
  getAllTicket,
  getSingleTicket,
  addTicket,
  updateTicket,
};
