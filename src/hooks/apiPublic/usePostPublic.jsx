import React from "react";
import useAxiosPublic from "../axios/useAxiosPublic";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostPublic = (queryKeys, endpoint) => {
  const axiosPublic = useAxiosPublic();

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosPublic.post(endpoint, data);
      return res?.data;
    },
    onSuccess: () => {
      if (queryKeys) {
        queryKeys?.forEach((queryKey) => {
          queryClient.invalidateQueries(queryKey);
        });
      }
    },
  });

  return { mutateAsync };
};

export default usePostPublic;
