/* eslint-disable no-unused-vars */
import axios from "axios";
import { toast } from "react-toastify";
import { getConfigWithToken } from "../../../utils/config";
import base_url_new from "../../../utils/base_url_new";

// Get All Leave
const sendInvoice = async (data) => {
  const config = await getConfigWithToken();

  try {
    const response = await axios.post(
      `${base_url_new}billing/process-invoice/`,
      data,
      config
    );
    return response;
  } catch (error) {
    // console.error("Error during sending billing invoice", error);
    console.log(error);
    toast.error(error?.response?.data?.error);
    return error;
  }
};

export const invoiceService = {
  sendInvoice,
};
