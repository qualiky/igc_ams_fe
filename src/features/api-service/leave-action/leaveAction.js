/* eslint-disable no-unused-vars */
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../../utils/base_url";
import { getConfigWithToken } from "../../../utils/config";

// Get All Leave
const getAllLeave = async ({ populate }) => {
  const config = await getConfigWithToken();

  try {
    const response = await axios.get(
      `${base_url}leave-details?sort[0]=leaveStartDay:desc&populate[applyingEmployee][fields][0]=firstName&populate[applyingEmployee][fields][1]=lastName&populate[applyingEmployee][fields][2]=profileImage&populate[applyingEmployee][populate][profileImage][fields][0]=url&fields[0]=leaveType&fields[1]=leaveStartDay&fields[2]=leaveEndDay&fields[3]=approvalStatus&pagination[pageSize]=10&pagination[page]=1`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error during getting leave data:", error);
    throw error;
  }
};

//   Get single Leave
const getSingleLeave = async (id) => {
  try {
    const config = await getConfigWithToken();

    const response = await axios.get(
      `${base_url}leave-details/${id}?populate=deep`,
      config
    );

    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

//   Get Yearly Leave
const getYearlySingleLeave = async (id) => {
  try {
    const config = await getConfigWithToken();

    const response = await axios.get(
      `${base_url}yearly-leave-details?fields[0]=numberOfAnnualLeaves&fields[1]=numberOfSickLeaves&fields[2]=fiscalYear&fields[3]=takenAnnualLeaves&fields[4]=takenSickLeaves&fields[5]=takenHalfDayLeaves&filters[employee][id][$eq]=${id}`,
      config
    );

    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Post Leave
const addLeave = async ({ data }) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(`${base_url}leave-details`, data, config);
    if (response.status === 200) {
      toast.success(response?.message || "Leave Added Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

// Update Leave
const updateLeave = async (id, data) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.put(
      `${base_url}leave-details/${id}`,
      { data },
      config
    );
    if (response.status === 200) {
      toast.success(response?.message || "Leave Updated Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

export const leaveService = {
  getAllLeave,
  getSingleLeave,
  addLeave,
  updateLeave,
  getYearlySingleLeave,
};
