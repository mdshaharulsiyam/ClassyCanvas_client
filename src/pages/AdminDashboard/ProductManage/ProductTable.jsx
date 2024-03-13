import React, { useEffect, useState } from "react";
import Table from "../../../components/shared/Table/Table";
import TableHeader from "../../../components/shared/table/TableHeader";
import TableBody from "../../../components/shared/Table/TableBody";
import TableRow from "../../../components/shared/table/TableRow";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import useGetSecure from "../../../hooks/apiSecure/useGetSecure";
import Pagination from "../../../components/shared/Pagination";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useDeleteSecure from "../../../hooks/apiSecure/useDeleteSecure";
import useAuth from "../../../hooks/auth/useAuth";

const ProductTable = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [pageCount, setPageCount] = useState(null);
  const { user: curUser } = useAuth();
  const headers = [
    "Name",
    "Brand",
    "Gender",
    "Available",
    "SellCount",
    "Action",
  ];
  const orders = [
    {
      ID: "1",
      Name: "Apples",
      Quantity: 10,
      Price: 2.99,
      Status: "In Stock",
    },
    {
      ID: "2",
      Name: "Orangesasdfadfadfasfadsf",
      Quantity: 5,
      Price: 3.49,
      Status: "In Stock",
    },
    {
      ID: "3",
      Name: "Bread",
      Quantity: 8,
      Price: 2.5,
      Status: "Out of Stock",
    },
    {
      ID: "4",
      Name: "Milk",
      Quantity: 15,
      Price: 1.99,
      Status: "In Stock",
    },
    {
      ID: "5",
      Name: "Cheese",
      Quantity: 3,
      Price: 4.99,
      Status: "In Stock",
    },
  ];

  const { data, isLoading: productLoad } = useGetSecure(
    ["ProductCount"],
    "/product-count"
  );

  useEffect(() => {
    console.log(data?.productCount);
    if (!productLoad) {
      setPageCount(Math.ceil(data?.productCount / size));
      // console.log(pageCount);
    }
  }, [data, productLoad]);

  const { data: products } = useGetSecure(
    ["Products", page, size],
    `/products?page=${page}&size=${size}`
  );

  const { mutateAsync: removeProduct } = useDeleteSecure([
    ["Products", page, size],
    ["ProductCount"],
  ]);

  const handleDeleteSingleProduct = async (productID) => {
    if (curUser?.email === "demoadmin@gmail.com") {
      return toast.error("Demo admin can't delete products");
    }

    try {
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
          removeProduct(`/product/${productID}`)
            .then((res) => {
              toast.success("Product removed!!");
            })
            .catch((err) => toast.error(err.message));
        }
      });
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-[400px] bg-white mt-5 pt-5 overflow-x-auto space-y-5 mb-10">
      <Table>
        <TableHeader headers={headers} cellWidth="35%" />
        <TableBody>
          {products?.map(
            ({ _id, name, brand, gender, available, sellCount }, idx) => (
              <TableRow
                className=" font-[300] text-gray-700 text-sm"
                key={_id}
                cells={[
                  name,
                  brand,
                  gender,
                  available ? "Yes" : "NO",
                  sellCount,
                ]}
                cellWidth="35%"
              >
                <th className="text-start w-[35%] flex justify-left gap-4 cursor-pointer">
                  {/* <AiFillEdit className="text-blue-500 text-2xl" /> */}
                  <AiFillDelete
                    onClick={() => handleDeleteSingleProduct(_id)}
                    className="text-red-500 text-2xl"
                  />
                </th>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
      <Pagination
        setPage={setPage}
        pageCount={pageCount}
        page={page}
        setSize={setSize}
        size={size}
      />
    </div>
  );
};

export default ProductTable;
