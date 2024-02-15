import React from "react";
import imgUrl from "../../assets/fresh-beef-burger.png";

const Customers = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-lg px-8 pt-20 pb-16 text-gray-700 md:pt-24 md:pb-20">
        <div className="flex flex-wrap">
          <div className="w-full max-w-full flex-shrink-0 lg:mt-2 lg:w-1/3 lg:flex-none">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-500 xl:text-base">
              Our Clients
            </h2>
            <h3 className="mb-3 font-bold text-gray-800 sm:text-2xl xl:text-4xl">
              Trusted by over 300+ clients
            </h3>
            <p className="">
              We bring solutions to make life easier for our customers.
            </p>
          </div>
          <div className="w-full max-w-full py-10 lg:w-2/3 lg:flex-none lg:px-8 lg:py-0">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="w-32">
                <img src={imgUrl} alt="" className="" />
              </div>
              <div className="w-32">
                <img src={imgUrl} alt="" className="" />
              </div>
              <div className="w-32">
                <img src={imgUrl} alt="" className="" />
              </div>
              <div className="w-32">
                <img src={imgUrl} alt="" className="" />
              </div>
              <div className="w-32">
                <img src={imgUrl} alt="" className="" />
              </div>
              <div className="w-32">
                <img src={imgUrl} alt="" className="" />
              </div>
              <div className="w-32">
                <img src={imgUrl} alt="" className="" />
              </div>
              <div className="w-32">
                <img src={imgUrl} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
