import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";

const useGetPublic = (queryKeys, endpoint) => {
  const axiosPublic = useAxiosPublic();

  const response = useQuery({
    queryKey: queryKeys,
    queryFn: async () => {
      const res = await axiosPublic.get(endpoint);
      return res?.data;
    },
  });

  return response;
};

export default useGetPublic;
