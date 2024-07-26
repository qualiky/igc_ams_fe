/* eslint-disable no-unused-vars */
import axios from "axios";
import { toast } from "react-toastify";
import base_url_new from "../../../utils/base_url_new";
import { getConfigWithToken } from "../../../utils/config";

const initiateKhaltiPayment = async (data) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(
      `${base_url_new}payment/initiate-khalti-payment/`,
      data,
      config
    );

    return response;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

const initiateStripePayment = async (data) => {
  try {
    const config = await getConfigWithToken();
    const response = await axios.post(
      `${base_url_new}payment/stripe/create-checkout-session/`,
      data,
      config
    );

    return response;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

export const paymentService = {
  initiateKhaltiPayment,
  initiateStripePayment,
};
