import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../../utils/base_url";
import { getConfigWithToken } from "../../../utils/config";

// Get All Ticket
const getAllTicket = async () => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.get(
      `${base_url}tickets?sort[0]=createdAt:desc&filters[parent][$null]=true&populate[replies][fields][0]=id&populate[replies][fields][1]=title&populate[replies][fields][2]=description&populate[replies][fields][3]=priority&populate[replies][populate][user][fields][0]=id&populate[replies][populate][user][fields][1]=username&populate[project][fields][0]=id&populate[project][fields][1]=projectName&populate[attachments][populate][data][populate][attributes][field][0]=url&fields[0]=id&fields[1]=title&fields[2]=description&fields[3]=createdAt&fields[4]=priority`,
      config
    );
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
      `${base_url}tickets/${id}?sort[0]=createdAt:desc&filters[parent][$null]=true&populate[replies][fields][0]=id&populate[replies][fields][1]=title&populate[replies][fields][2]=description&populate[replies][fields][3]=priority&populate[replies][fields][4]=createdAt&populate[replies][populate][user][fields][0]=id&populate[replies][populate][user][fields][1]=username&populate[replies][populate][user][fields][2]=email&populate[replies][populate][user][fields][3]=firstName&populate[replies][populate][user][fields][4]=lastName&populate[replies][populate][user][populate][profileImage][populate][data][populate][attributes][field][0]=url&populate[project][fields][0]=id&populate[project][fields][1]=projectName&populate[attachments][populate][data][populate][attributes][field][0]=url&fields[0]=id&fields[1]=title&fields[2]=description&fields[3]=createdAt&fields[4]=priority`,
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
