import axios from "axios";

import { useNavigate } from "react-router-dom";
import BASE_URL from "../../utils/api";
import useAuth from "../auth/useAuth";

const axiosSecure = axios.create({
  baseURL: BASE_URL,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();

  const { signOutMethod } = useAuth();

  // axiosSecure.interceptors.request.use(
  //   function (config) {
  //     const token = localStorage.getItem("token");

  //     config.headers.authorization = "Bearer " + token;
  //     return config;
  //   },
  //   function (error) {
  //     return Promise.reject(error);
  //   }
  // );

  // axiosSecure.interceptors.response.use(
  //   function (res) {
  //     return res;
  //   },
  //   async function (err) {
  //     const status = err.response?.status;

  //     if (status === 401 || status === 403) {
  //       await signOutMethod();
  //       navigate("/login");
  //     }

  //     return Promise.reject(err);
  //   }
  // );

  return axiosSecure;
};

export default useAxiosSecure;
