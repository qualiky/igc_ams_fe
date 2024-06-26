import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../../utils/base_url";
import { getConfigWithToken } from "../../../utils/config";

// Get All Employee
const getAllEmployee = async ({ populate }) => {
  const config = await getConfigWithToken();

  try {
    const response = await axios.get(
      `${base_url}employees?${
        populate ? `populate[0]=${populate}` : "populate=*"
      }`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error during get emplyee:", error);
    throw error;
  }
};

//   Get single employee
const getSingleEmployee = async (id) => {
  try {
    const config = await getConfigWithToken();

    const response = await axios.get(
      `${base_url}employees/${id}?populate=deep`,
      config
    );

    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Post Employee
const addEmployee = async ({ data }) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(`${base_url}employees`, data, config);
    if (response.status === 200) {
      toast.success(response?.message || "Employee Added Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Post Employee
const updateEmployee = async (id, data) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.put(
      `${base_url}employees/${id}`,
      { data },
      config
    );
    if (response.status === 200) {
      toast.success(response?.message || "Employee Updated Successfully");
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
  addEmployee,
  updateEmployee,
};
