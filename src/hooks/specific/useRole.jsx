import React from "react";
import useGetSecure from "../apiSecure/useGetSecure";
import useAuth from "../auth/useAuth";

const useRole = () => {
  const { user } = useAuth();
  console.log(user?.email);
  const { data: userRole } = useGetSecure(
    ["Role"],
    `/user/role/${user?.email}`
  );

  return userRole;
};

export default useRole;
