import React from "react";
import SideBar from "./SideBar";
import Tab from "./Tab";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-slate-200">
      {/* Tab */}
      <nav className="flex h-full  ml-[18rem] flex-col">
        <Tab />
      </nav>
      {/* tab */}
      {/* sidebar */}
      <aside className="fixed top-0 left-0 z-50">
        <SideBar />
      </aside>
      {/* sidebar */}
      {/* main */}
      <div className="h-full ml-[18rem]">
        <main
          id="dashboard-main"
          className="h-[calc(100vh-10rem)] overflow-auto px-4 py-10"
        >
          {<Outlet />}
        </main>
      </div>
      {/* main */}
    </div>
  );
};

export default Layout;
