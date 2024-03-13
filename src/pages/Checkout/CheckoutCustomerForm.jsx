import React from "react";
import Select from "../../components/html/Select";
import customerForm from "../../utils/checkoutData";
import { useForm } from "react-hook-form";
import useUser from "../../hooks/specific/useUser";
import Button from "../../components/html/Button";
import usePutSecure from "../../hooks/apiSecure/usePutSecure";
import useAuth from "../../hooks/auth/useAuth";
import toast from "react-hot-toast";

const CheckoutCustomerForm = ({ customerActive }) => {
  const { register, handleSubmit } = useForm();
  const user = useUser() || {};
  const { user: curUser } = useAuth();
  console.log(user);

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col gap-2 absolute ${
        customerActive ? "w-full left-0" : "top-[30%] -left-[100%]"
      } duration-[.5s] bg-white`}
    >
      {customerForm.map(({ name, type, placeHolder, options }) => (
        <div key={name}>
          <input
            defaultValue={user[name]}
            {...register(name)}
            className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
            type={type}
            placeholder={placeHolder}
          />
        </div>
      ))}
      <Button className="py-2 mt-4 text-white font-clashMedium">Save</Button>
    </form>
  );
};

export default CheckoutCustomerForm;
