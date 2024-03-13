import React, { useEffect, useState } from "react";
import useAxiosSecure from "../axios/useAxiosSecure";

const useBrands = () => {
  const [shoeBrands, setShoeBrands] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    setIsLoading(true);
    axiosSecure
      .get(`/brands`)
      .then((res) => {
        setShoeBrands(res.data);
        setIsLoading(false);
        console.log(shoeBrands);
      })
      .catch((err) => setIsLoading(false));
  }, []);

  return { shoeBrands, isLoading };
};

export default useBrands;
