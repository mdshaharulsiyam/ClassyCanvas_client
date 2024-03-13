import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar/Navbar";
import Footer from "../pages/Home/Footer/Footer";
import CartDrawer from "../pages/CartDrawer/CartDrawer";
import DrawerContext from "../context/DrawerContext";

const Root = () => {
  const { cartOpen, handleCartOpen } = useContext(DrawerContext);

  return (
    <div>
      <div className=" max-w-[1440px] mx-auto relative min-h-screen">
        <CartDrawer cartOpen={cartOpen} handleCartOpen={handleCartOpen} />
        <Navbar handleCartOpen={handleCartOpen} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Root;
