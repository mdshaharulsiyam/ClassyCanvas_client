import axios from "axios";
import React from "react";
import BASE_URL from "../../utils/api";

const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
