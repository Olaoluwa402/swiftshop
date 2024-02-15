import React from "react";
import { NavLink } from "react-router-dom";
import CartButton from "../CartButton/CartButton";
import { FaPlaneArrival } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3
        onClick={() => navigate("/")}
        className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black text-blue-500"
      >
        <FaPlaneArrival />
        SwiftShop
      </h3>

      <nav className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
        <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
          <li className="font-bold md:mr-12">
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li className="md:mr-12">
            <NavLink to="/customers">Customers</NavLink>
          </li>
          <li className="md:mr-12">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="md:mr-12">
            <CartButton />
          </li>
          <li className="md:mr-12">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li className="md:mr-12">
            <button
              onClick={() => navigate("/login")}
              className="rounded-full border-2 border-white px-6 py-1 text-white transition-colors hover:bg-blue-500 hover:text-white"
            >
              Login
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
