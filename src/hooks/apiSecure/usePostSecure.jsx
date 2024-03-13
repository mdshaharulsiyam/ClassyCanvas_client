import useAxiosSecure from "../axios/useAxiosSecure";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostSecure = (queryKeys, endpoint) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.post(endpoint, data);
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

export default usePostSecure;
