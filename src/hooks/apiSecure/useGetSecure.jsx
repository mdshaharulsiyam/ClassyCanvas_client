import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../axios/useAxiosSecure";
import useAuth from "../auth/useAuth";

const useGetSecure = (queryKeys, endpoint) => {
  const axiosSecure = useAxiosSecure();

  const { loading: authLoading, user } = useAuth();

  // console.log(authLoading);

  const response = useQuery({
    queryKey: queryKeys,
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(endpoint);
      return res?.data;
    },
  });

  return response;
};

export default useGetSecure;
