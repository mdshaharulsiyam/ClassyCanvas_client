import React from "react";
import { MdClose } from "react-icons/md";
import Swal from "sweetalert2";
import useUser from "../../../hooks/specific/useUser";
import useDeleteSecure from "../../../hooks/apiSecure/useDeleteSecure";
import toast from "react-hot-toast";

const DeleteButton = ({ id }) => {
  const { _id: userID } = useUser();

  const { mutateAsync: removeFromCart } = useDeleteSecure([["Carts", userID]]);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(`/cart/${id}`)
          .then((res) => {
            toast.success("Product removed from cart!!");
          })
          .catch((err) => toast.error(err.message));
      }
    });
  };

  return (
    <div
      onClick={handleDelete}
      className="bg-red-500 flex justify-center items-center p-1 rounded-full active:scale-95 divide-blue-[.4s] cursor-pointer "
    >
      <MdClose className=" text-white rounded-full text-sm" />
    </div>
  );
};

export default DeleteButton;
