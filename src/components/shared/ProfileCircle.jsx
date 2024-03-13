import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutBtn from "./SingleUseButtons/LogoutBtn";
import useAuth from "../../hooks/auth/useAuth";
import useUser from "../../hooks/specific/useUser";

const ProfileCircle = () => {
  const [profileMenu, setProfileMenu] = useState(false);

  const navigate = useNavigate();

  const { user: curUser } = useAuth();
  const { _id: userID } = useUser() || {};

  const navItems = [
    {
      name: "Profile",
      slug: `/profile/${userID}`,
    },
  ];

  return (
    <div
      onClick={() => setProfileMenu(!profileMenu)}
      className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full border border-black "
    >
      <img
        src={curUser?.photoURL}
        alt=""
        className="object-cover w-full h-full rounded-full"
      />
      <ul
        className={`${
          profileMenu ? "scale-100" : "scale-0"
        } duration-[.4s] w-[150px] py-2 absolute right-[20%] md:right-[7%] top-[70%]  bg-[#F2F2F2] flex flex-col  gap-3 pt-2 text-sm font-semibold`}
      >
        {navItems.map(({ name, slug }) => (
          <li
            key={name}
            onClick={() => navigate(slug)}
            className="px-4 py-2 border-b cursor-pointer hover:bg-black hover:text-white"
          >
            {name}
          </li>
        ))}
        <li className="pl-4">
          <LogoutBtn className="md:text-[9px] md:py-1" />
        </li>
      </ul>
    </div>
  );
};

export default ProfileCircle;
