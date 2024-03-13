import React from "react";
import DashboardProfileContainer from "../../../components/shared/Containers/DashboardProfileContainer";
import ProfileHeader from "../../../components/shared/Headers/ProfileHeader";
import { BsCartPlus } from "react-icons/bs";
import TableHeader from "../../../components/shared/table/TableHeader";
import Table from "../../../components/shared/Table/Table";
import TableBody from "../../../components/shared/Table/TableBody";
import TableRow from "../../../components/shared/table/TableRow";
import useGetSecure from "../../../hooks/apiSecure/useGetSecure";
import useUser from "../../../hooks/specific/useUser";

const MyOrders = () => {
  const headers = [
    "OrderID",
    "Transaction ID",
    "Quantity",
    "Price",
    "Order Date",
    "Status",
  ];
  // const orders = [
  //   {
  //     ID: "1",
  //     Name: "Apples",
  //     Quantity: 10,
  //     Price: 2.99,
  //     Status: "In Stock",
  //   },
  //   {
  //     ID: "2",
  //     Name: "Orangesasdfadfadfasfadsf",
  //     Quantity: 5,
  //     Price: 3.49,
  //     Status: "In Stock",
  //   },
  //   {
  //     ID: "3",
  //     Name: "Bread",
  //     Quantity: 8,
  //     Price: 2.5,
  //     Status: "Out of Stock",
  //   },
  //   {
  //     ID: "4",
  //     Name: "Milk",
  //     Quantity: 15,
  //     Price: 1.99,
  //     Status: "In Stock",
  //   },
  //   {
  //     ID: "5",
  //     Name: "Cheese",
  //     Quantity: 3,
  //     Price: 4.99,
  //     Status: "In Stock",
  //   },
  // ];
  const { _id: userID } = useUser() || {};
  const { data: orders } = useGetSecure(
    ["MyOrders", userID],
    `/orders/${userID}`
  );

  return (
    <DashboardProfileContainer>
      <ProfileHeader
        header="My Orders"
        icon={<BsCartPlus className="text-2xl lg:text-3xl" />}
      />
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
                    className={`text-start w-[35%] ${
                      status === "pending" ? "text-red-500" : "text-green-600"
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
    </DashboardProfileContainer>
  );
};

export default MyOrders;
