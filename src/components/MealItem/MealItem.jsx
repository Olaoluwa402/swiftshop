import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdShoppingCart, MdStar } from "react-icons/md";
import { useCartContext } from "../../store/CartProvider";
import { useGeneralContext } from "../../store/GeneralProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Modal from "../Modal/Modal";

const MealItem = ({ id, price, marketPrice, name, image, percentOff }) => {
  const navigate = useNavigate();
  const cartCtx = useCartContext();
  const { openModal, openModalHandler, getMeal, meal, closeModalHandler } =
    useGeneralContext();

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: id,
      name: name,
      price: price,
      image: image,
      amount: 1,
    });
  };

  const inCart = cartCtx.items.find((item) => item.id == id);

  const viewCartHandler = (id) => {
    getMeal(id);
    openModalHandler();
  };

  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <Link
        to={`/meals/${id}`}
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
      >
        <img
          src={image}
          alt={name}
          className="object-cover hover:animate-pulse"
        />
        <span className="animate-pulse absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {percentOff}% OFF
        </span>
      </Link>
      <div className="relative mt-4 px-5 pb-5">
        <Link to={`/meals/${id}`}>
          <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              ${price.toFixed(2)}
            </span>
            <span className="text-sm text-slate-900 line-through">
              ${marketPrice}
            </span>
          </p>
          <div className="flex items-center">
            <div className="ml-3 flex">
              <MdStar className="h-5 w-5 text-yellow-300" />
              <MdStar className="h-5 w-5 text-yellow-300" />
              <MdStar className="h-5 w-5 text-yellow-300" />
              <MdStar className="h-5 w-5 text-yellow-300" />
              <MdStar className="h-5 w-5 text-yellow-300" />
            </div>
            <span className="mr-2 rounded bg-yellow-200 px-0.5 py-0.5 text-xs font-semibold">
              5.0
            </span>
          </div>
        </div>

        <button
          disabled={inCart ? true : false}
          onClick={addToCartHandler}
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <MdShoppingCart size={20} className="mr-2 animate-bounce " />
          {inCart ? (
            <span className="text-green-600">In Cart</span>
          ) : (
            "Add to Cart"
          )}
        </button>

        <button
          disabled={inCart ? false : true}
          onClick={() => viewCartHandler(id)}
          className="absolute bottom-7 right-0 cursor-pointer"
        >
          {inCart ? <FaEye size={30} /> : <FaEyeSlash />}
        </button>
      </div>

      {openModal && (
        <Modal>
          <div className="mx-auto mt-8 max-w-md md:mt-12">
            <div className="rounded-3xl bg-white shadow-md">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  <ul className="-my-8">
                    {
                      <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                        <div className="shrink-0 relative">
                          <span className="absolute top-1 left-1 h-6 w-6 flex items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                            1
                          </span>
                          <img
                            className="h-24 w-24 max-w-full rounded-lg object-cover"
                            src={meal.image}
                            alt="image"
                          />
                        </div>

                        <div className="relative flex flex-1 flex-col justify-between">
                          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div className="pr-8 sm:pr-5">
                              <p>{meal.name}</p>
                              <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                french
                              </p>
                            </div>

                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm::order-2 sm:ml-8 sm:text-right">
                                ${meal.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    }
                  </ul>
                </div>

                {/* <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    <span className="text-sm font-normal text-gray-400">
                      USD
                    </span>{" "}
                    {cartCtx.grandTotal.toFixed(2)}
                  </p>
                </div> */}

                <div className="flex gap-2 items-center mt-6 text-center">
                  <button
                    onClick={closeModalHandler}
                    type="button"
                    className="group inline-flex w-full items-center gap-5 justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  >
                    Shopping
                  </button>
                  <button
                    onClick={() => navigate("/cart")}
                    type="button"
                    className="animate-bounce group inline-flex w-full items-center gap-5 justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  >
                    Go to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default MealItem;
