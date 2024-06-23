import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../../utils/base_url";
import { getConfigWithToken } from "../../../utils/config";

// Get All attendence Info
const getAllAttendence = async () => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.get(
      `${base_url}attendance-infos?populate=*`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error during getiing attendence info:", error);
    throw error;
  }
};

// Get single attendence
const getSingleAttendence = async (id) => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.get(
      `${base_url}attendance-infos/${id}?populate=*`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error during getting single attendence:", error);
    throw error;
  }
};

// Post Attendence
const addAttendence = async ({ data }) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(
      `${base_url}attendance-infos`,
      data,
      config
    );
    if (response.status === 200) {
      toast.success(response?.message || "Attendence Added Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

export const attendenceService = {
  addAttendence,
  getAllAttendence,
  getSingleAttendence,
};
