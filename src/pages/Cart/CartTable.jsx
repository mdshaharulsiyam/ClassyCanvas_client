import React, { useEffect, useState } from "react";
import CartTableRow from "./CartTableRow";
import useUser from "../../hooks/specific/useUser";
import useGetSecure from "../../hooks/apiSecure/useGetSecure";
import Button from "../../components/html/Button";
import useDeleteSecure from "../../hooks/apiSecure/useDeleteSecure";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";
import useAuth from "../../hooks/auth/useAuth";

const CartTable = () => {
  const { _id: userID } = useUser() || {};

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [cartProducts, setCartProducts] = useState([]);

  const { data } = useGetSecure(["Carts", userID], `/carts/${userID}`);

  useEffect(() => {
    setCartProducts(data);
  }, [data]);

  console.log(cartProducts);

  // useEffect(() => {
  //   // console.log(userID);
  //   if (userID) {
  //     axiosSecure
  //       .get(`/carts/${userID}`)
  //       .then((res) => setCartProducts(res.data));
  //   }
  // }, [userID]);

  const [selectedIds, setSelectedIds] = useState({});

  const handleSelected = (e, id) => {
    setSelectedIds((prev) => ({ ...prev, [id]: e.target.checked }));
  };

  const handleSelectAll = (e) => {
    const ids = cartProducts?.map(({ _id }) => _id);

    ids.forEach((id) => {
      setSelectedIds((prev) => ({ ...prev, [id]: e.target.checked }));
    });
  };

  const handleDeleteSelected = async () => {
    try {
      const selectedProduct = Object.keys(selectedIds).filter(
        (id) => selectedIds[id]
      );
      if (selectedProduct.length === 0) {
        toast.error("No product selected!!");
        return;
      }
      const response = await axiosSecure.delete(`/carts`, {
        data: selectedProduct,
      });
      console.log(response);
      if (response.data.deleteAll) {
        setCartProducts(
          cartProducts.filter(
            ({ _id }) =>
              !Object.keys(selectedIds)
                .filter((id) => selectedIds[id])
                .includes(_id)
          )
        );
        toast.error("Products removed from cart");
      }

      // toast.success(response);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  // console.log(Object.keys(selectedIds).filter((id) => selectedIds[id]));

  return (
    <table className=" no-scrollbar font-poppins w-full  ">
      {/* Header */}
      <thead className="grid grid-cols-4 pb-4 border-b font-semibold gap-2">
        <tr
          onClick={handleSelectAll}
          className="flex gap-2 items-center col-span-2 w-max "
        >
          <input type="checkbox" name="" id="select-all" />
          <label htmlFor="select-all text-[12px] md:text-sm lg:text-base">
            Select All
          </label>
        </tr>
        {["Quantity", "Total"].map((col) => (
          <tr
            className="col-span-1 text-[12px] md:text-sm lg:text-base"
            key={col}
          >
            {col}
          </tr>
        ))}
      </thead>
      <tbody className="h-[400px] overflow-auto no-scrollbar">
        {cartProducts?.map((cartProduct) => (
          <CartTableRow
            userID={userID}
            handleSelected={handleSelected}
            key={cartProduct._id}
            selectedIds={selectedIds}
            cartProduct={cartProduct}
          />
        ))}
      </tbody>
      <Button
        onClick={handleDeleteSelected}
        className="w-[35%] md:w-[30%] lg:w-[20%]  py-3 mt-8 rounded-sm font-clashRegular bg-white text-black border border-black text-sm md:text-base"
      >
        Delete Selected
      </Button>
    </table>
  );
};

export default CartTable;
