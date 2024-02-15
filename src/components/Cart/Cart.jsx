import React from "react";
import { MdCancel, MdAdd, MdOutlineRemove } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { useCartContext } from "../../store/CartProvider";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const cartCtx = useCartContext();
  return (
    <section className="min-h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
        </div>

        {cartCtx.items.length > 0 ? (
          <div className="mx-auto mt-8 max-w-md md:mt-12">
            <div className="rounded-3xl bg-white shadow-md">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  <ul className="-my-8">
                    {cartCtx.items.map((item) => (
                      <li
                        key={item.id}
                        className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                      >
                        <div className="shrink-0 relative">
                          <span className="absolute top-1 left-1 h-6 w-6 flex items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                            {item.amount}
                          </span>
                          <img
                            className="h-24 w-24 max-w-full rounded-lg object-cover"
                            src={item.image}
                            alt="image"
                          />
                        </div>

                        <div className="relative flex flex-1 flex-col justify-between">
                          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div className="pr-8 sm:pr-5">
                              <p>{item.name}</p>
                            </div>

                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm::order-2 sm:ml-8 sm:text-right">
                                ${item.price}
                              </p>
                            </div>

                            <div className="absolute top-0 left-0 sm:bottom-0 sm:top-auto flex flex-row bg-blue-800">
                              <MdAdd
                                size={35}
                                onClick={() =>
                                  cartCtx.incrementCartQtyHandler(item.id)
                                }
                                type="button"
                                className="flex rounded p-2 text-white text-center cursor-pointer transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                              />

                              <MdOutlineRemove
                                size={35}
                                onClick={() =>
                                  cartCtx.decrementCartQtyHandler(item.id)
                                }
                                type="button"
                                className="flex rounded p-2 text-center text-white cursor-pointer transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                              />
                            </div>

                            <div className="absolute top-0 right-0 sm:bottom-0 sm:top-auto">
                              <button
                                onClick={() => cartCtx.removeItem(item.id)}
                                type="button"
                                className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                              >
                                <MdCancel size={20} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 space-y-3 border-t border-b py-8">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">Subtotal</p>
                    <p className="text-lg font-semibold text-gray-900">
                      ${cartCtx.totalAmount.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">Shipping</p>
                    <p className="text-lg font-semibold text-gray-900">
                      ${cartCtx.shipping}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    <span className="text-sm font-normal text-gray-400">
                      USD
                    </span>{" "}
                    {cartCtx.grandTotal.toFixed(2)}
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => navigate("/checkout")}
                    type="button"
                    className="group inline-flex w-full items-center gap-5 justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  >
                    Checkout
                    <FaArrowRightLong className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center my-5">
            <h4 className="text-2xl font-semibold text-gray-600">
              Your cart is empty
            </h4>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
