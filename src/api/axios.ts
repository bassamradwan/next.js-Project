import axios, { AxiosRequestHeaders } from "axios";
import Cookies from "js-cookie";


const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  config => {
    // @ts-ignore
    const headers: AxiosRequestHeaders = {
      ...config.headers,
    };
    const token = Cookies.get("medtich-token");

      headers.Authorization = `Bearer ${token}`;

    return { ...config, headers };
  },
  error => {
    return Promise.reject(error);
  },
);
export default axiosInstance;
