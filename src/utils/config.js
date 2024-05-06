import { store } from "../app/store";

// Define a function to get the token from AsyncStorage
const getUser = async () => {
  try {
    return store.getState("auth");
  } catch (error) {
    console.error("Error retrieving token:", error);
    throw error;
  }
};

// Define a function to generate the config object with the token
export const getConfigWithToken = async () => {
  try {
    const token = await getUser();
    const config = {
      headers: {
        Authorization: token ? `Bearer ${token?.auth?.token}` : "",
        Accept: "application/json",
      },
    };
    return config;
  } catch (error) {
    console.error("Error generating config:", error);
    throw error;
  }
};
