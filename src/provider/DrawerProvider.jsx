import React, { useState } from "react";
import DrawerContext from "../context/DrawerContext";

const DrawerProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartOpen = () => {
    setCartOpen(!cartOpen);
  };

  const drawerInfo = { cartOpen, handleCartOpen };
  return (
    <DrawerContext.Provider value={drawerInfo}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
