import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../../utils/base_url";
import { getConfigWithToken } from "../../../utils/config";

// Update Personal Identification Detail
const updatePersonalInformation = async (id, data) => {
  const config = await getConfigWithToken();

  try {
    const response = await axios.put(
      `${base_url}personal-identification-infos/${id}`,
      { data },
      config
    );
    if (response.status === 200) {
      toast.success(
        response?.message || "Personal Information Updated Successfully"
      );
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    console.error(
      "Error during updating single Personal Identification Information:",
      error
    );
    throw error;
  }
};

// Delete Personal Identification Detail
const deletePersonalInformation = async (id) => {
  const config = await getConfigWithToken();
  try {
    const response = await axios.delete(
      `${base_url}personal-identification-infos/${id}`,
      config
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error during deleting Personal Identification Information",
      error
    );
    throw error;
  }
};

// Post Personal Identification Details
const addPersonalInformation = async ({ data }) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(
      `${base_url}personal-identification-infos`,
      data,
      config
    );
    if (response.status === 200) {
      toast.success(
        response?.message || "Personal Information Added Successfully"
      );
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

export const personalInformationService = {
  updatePersonalInformation,
  deletePersonalInformation,
  addPersonalInformation,
};
