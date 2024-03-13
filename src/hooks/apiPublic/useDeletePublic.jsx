import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";

const useDeletePublic = (queryKeys, endpoint) => {
  const queryClient = useQueryClient();

  const axiosPublic = useAxiosPublic();

  const { mutateAsync } = useMutation({
    mutationFn: async () => {
      const res = await axiosPublic.delete(endpoint);
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

export default useDeletePublic;
