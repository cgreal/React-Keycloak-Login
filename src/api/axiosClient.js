import axios from "axios";
import KeycloakService from "../auth/KeycloakService";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

axiosClient.interceptors.request.use((config) => {
  const token = KeycloakService.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
