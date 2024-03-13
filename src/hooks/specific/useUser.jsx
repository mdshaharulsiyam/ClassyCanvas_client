import React from "react";
import useAuth from "../auth/useAuth";
import useGetSecure from "../apiSecure/useGetSecure";

const useUser = () => {
  const { user } = useAuth();
  // console.log(user?.email);
  const { data: userData } = useGetSecure(
    ["User", user?.email],
    `/user/${user?.email}`
  );

  return userData;
};

export default useUser;
