import Button from "../../../components/html/Button";
import { useForm } from "react-hook-form";
import useUser from "../../../hooks/specific/useUser";

import useAuth from "../../../hooks/auth/useAuth";
import usePutSecure from "../../../hooks/apiSecure/usePutSecure";
import toast from "react-hot-toast";
import { useState } from "react";
import Select from "../../../components/html/Select";

const ProfileForm = () => {
  const country = ["USA", "Canada", "UK", "Australia", "Other"];
  const region = ["California", "New York", "Texas", "Florida", "Other"];

  const user = useUser() || {};
  // console.log(user);
  const { user: curUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const { mutateAsync: updateUser } = usePutSecure(
    null,
    `/users/${curUser?.email}`
  );
  const onSubmit = async (data) => {
    const response = await updateUser(data);

    if (response.updateOne) {
      toast.success("User updated successfully!!");
    }
  };

  return (
    <div className="mt-10 bg-white min-h-[68vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[90%] mx-auto pt-5 grid grid-cols-1 md:grid-cols-6 gap-2 "
      >
        <input
          defaultValue={user?.firstName || ""}
          {...register("firstName")}
          placeHolder="First Name"
          className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none md:col-span-3"
        />
        <input
          defaultValue={user?.lastName || ""}
          {...register("lastName")}
          placeHolder="Last Name"
          className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none md:col-span-3"
        />

        <input
          defaultValue={user?.country || ""}
          className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none md:col-span-2"
          {...register("country")}
          placeHolder="Country"
        />

        <input
          defaultValue={user?.city || ""}
          className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none md:col-span-2"
          {...register("city")}
          placeHolder="City"
        />
        <input
          defaultValue={user?.region || ""}
          className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none md:col-span-2"
          {...register("region")}
          placeHolder="Region"
        />

        <input
          defaultValue={user?.address || ""}
          className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none md:col-span-6 "
          {...register("address")}
          placeHolder="Address"
        />

        <input
          defaultValue={user?.email || ""}
          className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none md:col-span-6 "
          {...register("email")}
          placeHolder="Email"
          disabled
          type="email"
        />
        <input
          defaultValue={user?.phone || ""}
          className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none md:col-span-3 "
          {...register("phone")}
          placeHolder="Phone"
        />
        <input
          defaultValue={user?.zipCode || ""}
          {...register("zipCode")}
          className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none md:col-span-3 "
          placeHolder="Zip Code"
          type="number"
        />
        <Button className="py-2 mt-4 text-white font-clashMedium">Save</Button>
      </form>
    </div>
  );
};

export default ProfileForm;
