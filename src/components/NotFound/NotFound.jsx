import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="w-full">
      <h1 className="text-5xl text-center">Opps, No page found</h1>

      <div className="w-[380px] mx-auto my-12">
        <Link className="flex items-center text-center" to="/">
          <MdArrowBack className="text-green-500" />
          <span className="text-green-500">Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
