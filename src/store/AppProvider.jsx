import React from "react";
import GeneralProvider from "./GeneralProvider";
import CartProvider from "./CartProvider";

const AppProvider = ({ children }) => {
  return (
    <GeneralProvider>
      <CartProvider>{children}</CartProvider>
    </GeneralProvider>
  );
};

export default AppProvider;
