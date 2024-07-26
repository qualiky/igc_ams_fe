/* eslint-disable no-unused-vars */
import axios from "axios";
import { toast } from "react-toastify";
import { getConfigWithToken } from "../../../utils/config";
import base_url_new from "../../../utils/base_url_new";

// ---------------------------------------Chat Room----------------------------------------

// Get All Chat
const getAllRoom = async ({ populate }) => {
  const config = await getConfigWithToken();

  try {
    const response = await axios.get(`${base_url_new}api/rooms/`, config);
    return response.data;
  } catch (error) {
    console.error("Error during getting Room List", error);
    throw error;
  }
};

//   Get single Room
const getSingleRoom = async (id) => {
  try {
    const config = await getConfigWithToken();

    const response = await axios.get(`${base_url_new}api/rooms/${id}/`, config);

    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Create Room
const createChatRoom = async ({ data }) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(
      `${base_url_new}api/rooms/`,
      data,
      config
    );
    if (response.status === 200) {
      toast.success(response?.message || "Chat Added Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Update Room
const updateChatRoom = async (id, data) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.put(
      `${base_url_new}api/rooms/${id}/`,
      { data },
      config
    );
    if (response.status === 200) {
      toast.success(response?.message || "Chat Room Updated Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Delete Chat Room
const deleteChatRoom = async (id) => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.delete(
      `${base_url_new}api/rooms/${id}/`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error during deleting chat rooms:", error);
    throw error;
  }
};
// ---------------------------------------Messages----------------------------------------
// Post Chat
const addChat = async ({ data }) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(
      `${base_url_new}Chat-details`,
      data,
      config
    );
    if (response.status === 200) {
      toast.success(response?.message || "Chat Added Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Update Chat
const updateChat = async (id, data) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.put(
      `${base_url_new}Chat-details/${id}`,
      { data },
      config
    );
    if (response.status === 200) {
      toast.success(response?.message || "Chat Updated Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

export const ChatService = {
  //   getAllChat,
  //   getSingleChat,
  //   addChat,
  //   updateChat,
  //   getYearlySingleChat,
};
