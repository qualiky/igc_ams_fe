import axios from "axios";
import base_url from "../../../utils/base_url";
import { getConfigWithToken } from "../../../utils/config";

// Get All bank details
const getHomeData = async () => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.get(`${base_url}home/data`, config);
    return response.data;
  } catch (error) {
    console.error("Error during getting home data", error);
    throw error;
  }
};

export const homeService = {
  getHomeData,
};
