import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="">
      {/* Navigation */}
      <div className="overflow-x-hidden bg-gray-800 relative flex w-full flex-col overflow-hidden p-4 text-gray-200 md:mx-auto md:flex-row md:items-center">
        <Navigation />
      </div>
      {/* siderbar */}
      {/* main screen */}
      <div className="">{children}</div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
