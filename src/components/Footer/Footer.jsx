import React from "react";
import burgerImg from "../../assets/fresh-beef-burger.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-gray-900 px-4 pt-20">
      <div className="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-sky-500 bg-white p-2">
        <img src={burgerImg} alt="swiftshop image" />
      </div>

      <nav
        aria-label="Footer Navigation"
        className="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left"
      >
        <Link to="/" className="font-medium text-white">
          About
        </Link>
        <Link to="/" className="font-medium text-white">
          Contact
        </Link>
        <Link to="/" className="font-medium text-white">
          Private Policy
        </Link>
        <Link to="/" className="font-medium text-white">
          terms & Condition
        </Link>
      </nav>
      <p className="py-10 text-center text-gray-300">
        &copy; 2024 SwiftShop | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
