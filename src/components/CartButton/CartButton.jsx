import React from "react";
import { useNavigate } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { useCartContext } from "../../store/CartProvider";

const CartButton = () => {
  const navigate = useNavigate();
  const cartCtx = useCartContext();
  return (
    <button className="relative" onClick={() => navigate("/cart")}>
      <MdShoppingCart size={20} />
      <div className="w-[15px] h-[15px] rounded-full flex justify-center items-center p-1 bg-red-500 text-white text-[12px] absolute -top-1 -right-2">
        {cartCtx.totalItems}
      </div>
    </button>
  );
};

export default CartButton;
