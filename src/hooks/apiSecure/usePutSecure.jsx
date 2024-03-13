import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../axios/useAxiosSecure";

const usePutSecure = (queryKeys, endpoint) => {
  const queryClient = useQueryClient();

  const axiosSecure = useAxiosSecure();

  const { mutateAsync } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.put(endpoint, data);
      return res?.data;
    },
    onSuccess: () => {
      if (queryKeys) {
        queryKeys.forEach((queryKey) => {
          queryClient.invalidateQueries(queryKey);
        });
      }
    },
  });

  return { mutateAsync };
};

export default usePutSecure;
