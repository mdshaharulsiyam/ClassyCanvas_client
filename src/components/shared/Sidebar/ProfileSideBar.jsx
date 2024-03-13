import React, { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { BiSolidUserAccount } from "react-icons/bi";
import { IoBookmarks, IoPeople } from "react-icons/io5";
import { TbInfoOctagonFilled } from "react-icons/tb";
import { AiOutlineTransaction } from "react-icons/ai";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";
import useUser from "../../../hooks/specific/useUser";
import useRole from "../../../hooks/specific/useRole";
import useAuth from "../../../hooks/auth/useAuth";
import ProfileInfoSkeleton from "../../skeletons/ProfileInfoSkeleton";
import SidebarLinkSkeleton from "../../skeletons/SidebarLinkSkeleton";

const ProfileSideBar = () => {
  const { _id, name: userName } = useUser() || {};
  const { role } = useRole() || {};
  console.log(role);
  const { user: curUser, loading } = useAuth();

  const [activeItem, setActiveItem] = useState("Account");
  const navItem = [
    {
      name: "Account",
      to: `/profile/${_id}`,
      icon: (className) => <BiSolidUserAccount className={`${className}`} />,
      show: role === "user",
    },
    {
      name: "Wishlist",
      to: `/profile/${_id}/wishlist`,
      icon: (className) => <IoBookmarks className={`${className}`} />,
      show: role === "user",
    },
    {
      name: "Orders",
      to: `/profile/${_id}/orders`,
      icon: (className) => <BsCartPlus className={`${className}`} />,
      show: role === "user",
    },

    {
      name: "Sales Overview",
      to: `/profile/${_id}/admin/sales-overview`,
      icon: (className) => <FaMoneyBillTrendUp className={`${className}`} />,
      show: role === "admin",
    },
    {
      name: "Manage Orders",
      to: `/profile/${_id}/admin/orders-manage`,
      icon: (className) => <BsCartPlus className={`${className}`} />,
      show: role === "admin",
    },
    // Upcoming...
    {
      name: "Manage Products",
      to: `/profile/${_id}/admin/product-manage`,
      icon: (className) => <FaBoxes className={`${className}`} />,
      show: role === "admin",
    },
    {
      name: "Manage Users",
      to: `/profile/${_id}/admin/manage-users`,
      icon: (className) => <IoPeople className={`${className}`} />,
      show: role === "admin",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-max  lg:h-auto lg:w-[18%] h-full z-20">
      <h1
        onClick={() => setMenuOpen(true)}
        className={` mt-[5vh] ml-[5vw] lg:hidden`}
      >
        <CgMenuLeftAlt className="text-2xl" />
      </h1>
      <aside
        className={`w-[70%] sm:w-[38%] lg:w-[18%] pt-5 pl-5  min-h-[500px] h-full duration-[.4s]  fixed ${
          menuOpen ? "top-0 left-0" : "left-[-100%] lg:top-0 lg:left-0"
        } duration-[.4s] bg-[#0E0E0E] `}
      >
        <div className="flex items-center justify-between pb-2 text-white">
          <Link
            to="/"
            className="text-lg underline cursor-pointer font-clashBold sm:text-xl"
          >
            ClassyCanvas
          </Link>
          <BiLeftArrowAlt
            onClick={() => setMenuOpen(false)}
            className="text-2xl lg:hidden"
          />
        </div>
        {loading ? (
          <ProfileInfoSkeleton />
        ) : (
          <div className="flex items-center gap-4 pb-6 mt-5 text-white border-b">
            <div className=" rounded-full text-black flex justify-center items-center font-clashBold text-2xl">
              {/* JK */}
              <img
                src={curUser?.photoURL}
                alt={curUser.displayName}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div>
              <p>Hi,</p>
              <p className="font-bold">{userName && userName.toUpperCase()}</p>
            </div>
          </div>
        )}

        {loading ? (
          <SidebarLinkSkeleton />
        ) : (
          <ul className="flex flex-col gap-4 mt-10 ">
            {navItem.map(({ name, icon, to, show }) => (
              <Link key={name} to={to}>
                <li
                  onClick={() => setActiveItem(name)}
                  className={`text-sm sm:text-base flex items-center gap-4  hover:bg-white hover:text-black duration-[.3s] py-2 pl-1 cursor-pointer ${
                    activeItem === name ? " bg-white text-black" : "text-white"
                  } ${show ? "" : "hidden"}`}
                >
                  {icon("text-xl")}
                  {name}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
};

export default ProfileSideBar;
