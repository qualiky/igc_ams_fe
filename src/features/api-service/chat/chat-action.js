/* eslint-disable no-unused-vars */
import axios from "axios";
import { toast } from "react-toastify";
import { getConfigWithToken } from "../../../utils/config";
import base_url_new from "../../../utils/base_url_new";
import base_system from "../../../utils/base_system";

// ---------------------------------------Chat Room----------------------------------------

// Get All Chat
const getAllRoom = async () => {
  const config = await getConfigWithToken();

  try {
    const response = await axios.get(`${base_system}chat/rooms/`, config);
    return response.data;
  } catch (error) {
    console.error("Error during getting Room List", error);
    throw error;
  }
};

// Create Room
const createChatRoom = async (username) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(
      `${base_url_new}chat/rooms/private/${username}/`,
      {
        name: "new_room",
        is_private: true,
      },
      config
    );

    return response.data;
  } catch (error) {
    console.error(error?.response?.data?.error?.message);

    throw error;
  }
};

//   Get Chat Message list
const getChatRoomMessage = async (id) => {
  try {
    const config = await getConfigWithToken();

    const response = await axios.get(
      `${base_system}chat/rooms/${id}/messages/`,
      config
    );

    return response.data;
  } catch (error) {
    console.error(error?.response?.data?.error?.message);
    throw error;
  }
};

export const chatService = {
  getAllRoom,
  createChatRoom,
  getChatRoomMessage,
};
