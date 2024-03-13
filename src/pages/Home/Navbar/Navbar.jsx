import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgMenuRightAlt } from "react-icons/cg";
import DropDown from "../../../components/shared/DropDown";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import ProfileCircle from "../../../components/shared/ProfileCircle";
import { RiHeartAddLine } from "react-icons/ri";
import useAuth from "../../../hooks/auth/useAuth";
import Button from "../../../components/html/Button";

const Navbar = ({ handleCartOpen }) => {
  const [menu, setMenu] = useState(false);
  const [transparent, setTransparent] = useState(false);
  const [bgWhite, setBgWhite] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const { user } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setTransparent(pathname.includes("/product/"));
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prevValue = scrollY.getPrevious();
    // console.log("latest: ", latest - 50, "prev: ", prevValue);
    if (latest > 240) {
      setBgWhite(true);
    } else {
      setBgWhite(false);
    }

    if (latest > prevValue && latest > 30) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "Collection",
      slug: "/collection",
    },
    {
      name: "Cart",
      slug: "/cart",
    },
    {
      name: "Checkout",
      slug: "/checkout",
    },
  ];

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 z-[12] w-full ${
        pathname === "/login" || pathname === "/signup" ? "hidden" : ""
      } ${transparent ? " bg-transparent" : "bg-white"} h-max `}
    >
      <nav
        className={`px-[5%] flex justify-between  py-4 items-center overflow-hidden border-b ${
          transparent && !bgWhite
            ? "border-none text-white"
            : bgWhite && transparent
            ? "bg-white text-black"
            : "border-b-gray-500 text-black"
        }   z-10 `}
      >
        {/* Logo */}
        <div className="w-max flex items-center gap-3">
          <Link to="/" className="text-lg underline font-clashBold sm:text-xl">
            ClassyCanvas
          </Link>
        </div>

        {/* NavItems */}
        <ul className="hidden lg:flex justify-center gap-6 w-[40%] font-clashRegular items-center pl-[5%]">
          {navItems.map(({ name, slug }) => (
            <li key={name}>
              <NavLink
                to={slug}
                className={({ isActive }) =>
                  isActive
                    ? "border-b border-black text-[15px]"
                    : "nav-button duration-300 text-[15px]"
                }
              >
                {name}
              </NavLink>{" "}
            </li>
          ))}
        </ul>

        {/* Search and Cart */}

        <div className="flex justify-end items-center gap-4  md:w-[80%] lg:w-max">
          {/* <Search
            className="hidden md:flex"
            iconClass={`text-xl right-[3%] top-[25%] `}
            transparent={transparent}
            inputClass="py-2 pl-2"
          /> */}
          <div>
            <AiOutlineShoppingCart
              onClick={handleCartOpen}
              className="text-xl md:text-2xl"
            />
          </div>
          <div>
            <RiHeartAddLine
              // onClick={handleCartOpen}
              className="text-xl md:text-2xl"
            />
          </div>

          {/* <LogoutBtn className="hidden sm:block" /> */}

          {user?.email ? (
            <ProfileCircle />
          ) : (
            <Button
              onClick={() => navigate("/login")}
              className={`text-[12px] text-white md:text-sm px-4 md:px-3 font-clashRegular py-1 md:py-2 `}
            >
              Sign In
            </Button>
          )}

          <CgMenuRightAlt
            className="text-xl md:hidden "
            onClick={() => setMenu(!menu)}
          />
        </div>
        <DropDown menu={menu} setMenu={setMenu} navItems={navItems} />
      </nav>
    </motion.div>
  );
};

export default Navbar;
