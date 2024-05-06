import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../../utils/base_url";
import { getConfigWithToken } from "../../../utils/config";

// Get All Employee
const getAllEmployee = async () => {
  const config = await getConfigWithToken();
  console.log(config || "not config");
  try {
    const response = await axios.get(`${base_url}employees`);
    return response.data;
  } catch (error) {
    console.error("Error during register:", error);
    throw error;
  }
};

//   Get
const getSingleEmployee = async (id) => {
  try {
    const response = await axios.post(`${base_url}employees/${id}`);
    if (response.status === 200) {
      toast.success(response?.message || "");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

export const employeeService = {
  getAllEmployee,
  getSingleEmployee,
};
