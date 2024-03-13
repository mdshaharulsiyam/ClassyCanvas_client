import React from "react";
import DashboardProfileContainer from "../../../components/shared/Containers/DashboardProfileContainer";
import ProfileHeader from "../../../components/shared/Headers/ProfileHeader";
import { IoPeople } from "react-icons/io5";
import Table from "../../../components/shared/Table/Table";
import TableHeader from "../../../components/shared/table/TableHeader";
import TableBody from "../../../components/shared/Table/TableBody";
import TableRow from "../../../components/shared/table/TableRow";
import useGetSecure from "../../../hooks/apiSecure/useGetSecure";
import { MdDeleteOutline } from "react-icons/md";
import useDeleteSecure from "../../../hooks/apiSecure/useDeleteSecure";
import toast from "react-hot-toast";
import { deleteUser } from "firebase/auth";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/auth/useAuth";

const ManageUsers = () => {
  const headers = ["Name", "Email", "Role", "Action"];

  const { data: users } = useGetSecure(["Users"], `/users`);
  const { user: curUser } = useAuth();
  const { mutateAsync: removeUser } = useDeleteSecure([["Users"]]);
  const handleDeleteSingleUser = async (userID) => {
    if (curUser?.email === "demoadmin@gmail.com") {
      return toast.error("Demo admin can't delete users!!");
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
          removeUser(`/user/${userID}`)
            .then((res) => {
              toast.success("Product removed from cart!!");
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
    <DashboardProfileContainer>
      <ProfileHeader
        header="Manage Users"
        icon={<IoPeople className="text-2xl lg:text-3xl" />}
      />
      <div className="min-h-[400px] bg-white mt-5 pt-5 overflow-x-auto">
        <Table>
          <TableHeader headers={headers} cellWidth="30%" />
          <TableBody>
            {users?.map(({ _id, name, email, role }, idx) => (
              <TableRow
                className="text-start font-[300] text-gray-700 text-sm"
                key={_id}
                cells={[name, email, role]}
                cellWidth="35%"
              >
                <th
                  className="ml-[5%] w-[35%] cursor-pointer"
                  onClick={() => handleDeleteSingleUser(_id)}
                >
                  <MdDeleteOutline className="text-red-500 text-2xl" />
                </th>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardProfileContainer>
  );
};

export default ManageUsers;
