import React from "react";
import Table from "../../../components/shared/Table/Table";
import TableHeader from "../../../components/shared/table/TableHeader";
import TableBody from "../../../components/shared/Table/TableBody";
import TableRow from "../../../components/shared/table/TableRow";
import { AiFillDelete } from "react-icons/ai";
import useUser from "../../../hooks/specific/useUser";
import useGetSecure from "../../../hooks/apiSecure/useGetSecure";
import usePutSecure from "../../../hooks/apiSecure/usePutSecure";
import useAxiosSecure from "../../../hooks/axios/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const OrderTable = ({ orders }) => {
  const headers = [
    "OrderID",
    "Transaction ID",
    "Quantity",
    "Price",
    "Order Date",
    "Status",
  ];

  const queryClient = useQueryClient();

  const { mutateAsync: updateStatus } = useMutation({
    mutationFn: async (endpoint, data) => {
      console.log("hit add user");
      const res = await axiosSecure.patch(endpoint, data);
      return res?.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["MyOrders", userID]);
    },
  });

  const axiosSecure = useAxiosSecure();

  const handleUpdateStatus = async (orderID, status) => {
    if (status !== "pending") return;

    try {
      Swal.fire({
        title: "Marked as delivered?",
        text: "The order will be marked as delivered.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Proceed",
      }).then((result) => {
        if (result.isConfirmed) {
          updateStatus(`/order/${orderID}`, {}).then((res) => {
            toast.success("Order Delivered!!");
          });
        }
      });
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-[400px] bg-white mt-5 pt-5 overflow-x-auto">
      <Table>
        <TableHeader headers={headers} cellWidth="35%" />
        <TableBody>
          {orders?.map(
            (
              { _id, transactionID, quantity, price, orderDate, status },
              idx
            ) => (
              <TableRow
                key={_id}
                className=" font-[300] text-gray-700 text-sm"
                cells={[_id, transactionID, quantity, price, orderDate]}
                cellWidth="35%"
              >
                <th
                  onClick={() => handleUpdateStatus(_id, status)}
                  className={`text-start w-[35%]  cursor-pointer ${
                    status === "pending"
                      ? "text-red-500 underline"
                      : "text-green-600 "
                  }`}
                >
                  {status}
                </th>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderTable;
