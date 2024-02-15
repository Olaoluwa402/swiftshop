import React, { useContext, useReducer } from "react";
import CartContext from "./cart-context";
import { toast } from "react-toastify";

const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      items: [],
      totalAmount: 0,
      totalItems: 0,
      shipping: 8,
      grandTotal: 0,
      currency: "USD",
    };

const defaultCartState = cartFromLocalStorage;

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const itemExist = state.items.find((p) => p.id == action.item.id);
      if (!itemExist) {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount =
          Number(state.totalAmount) +
          Number(action.item.price) * Number(action.item.amount);
        const updatedTotalItems =
          Number(state.totalItems) + Number(action.item.amount);
        const updatedGrandTotal = updatedTotalAmount + state.shipping;
        toast.success("Item added to cart");

        const AUpdate = {
          ...state,
          items: updatedItems,
          totalAmount: updatedTotalAmount,
          totalItems: updatedTotalItems,
          grandTotal: updatedGrandTotal,
        };
        persistToStorage(AUpdate);

        return AUpdate;
      } else {
        persistToStorage({ ...state });
        return { ...state };
      }

    case "REMOVE_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id == action.id
      );

      const existingItem = state.items[existingItemIndex];

      const updatedTotalAmount =
        Number(state.totalAmount) - Number(existingItem.price);
      const updatedTotalItems = Number(state.totalItems) - 1;

      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };

        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      }

      const RUpdate = {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalItems: updatedTotalItems,
        grandTotal: updatedTotalAmount + state.shipping,
      };
      persistToStorage(RUpdate);

      return RUpdate;

    case "INCREMENT_QTY":
      const incrementItemIndex = state.items.findIndex(
        (item) => item.id == action.id
      );

      const incrementItem = state.items[incrementItemIndex];

      const updatedIncrementedItemTotalAmount =
        Number(state.totalAmount) + Number(incrementItem.price);
      const updatedIncrementedITotalItems = Number(state.totalItems) + 1;

      const updatedIncrementedItem = {
        ...incrementItem,
        amount: incrementItem.amount + 1,
      };
      const updatedIncrementedItems = [...state.items];
      updatedIncrementedItems[incrementItemIndex] = updatedIncrementedItem;

      const IUpdate = {
        ...state,
        items: updatedIncrementedItems,
        totalAmount: updatedIncrementedItemTotalAmount,
        totalItems: updatedIncrementedITotalItems,
        grandTotal: updatedIncrementedItemTotalAmount + state.shipping,
      };
      persistToStorage(IUpdate);
      return IUpdate;

    case "DECREMENT_QTY":
      const decrementItemIndex = state.items.findIndex(
        (item) => item.id == action.id
      );

      const decrementItem = state.items[decrementItemIndex];

      const updatedDecrementItemTotalAmount =
        Number(state.totalAmount) - Number(decrementItem.price);
      const updatedDecrementedTotalItems = Number(state.totalItems) - 1;

      let updatedDecrementedItems;
      if (decrementItem.amount === 1) {
        updatedDecrementedItems = state.items.filter(
          (item) => item.id !== action.id
        );
      } else {
        const updatedDecrementedItem = {
          ...decrementItem,
          amount: decrementItem.amount - 1,
        };
        updatedDecrementedItems = [...state.items];
        updatedDecrementedItems[decrementItemIndex] = updatedDecrementedItem;
      }

      const DUpdate = {
        ...state,
        items: updatedDecrementedItems,
        totalAmount: updatedDecrementItemTotalAmount,
        totalItems: updatedDecrementedTotalItems,
        grandTotal: updatedDecrementItemTotalAmount + state.shipping,
      };

      persistToStorage(DUpdate);

      return DUpdate;

    case "CLEAR_CART":
      console.log("cleared");
      localStorage.removeItem("cart");
      return defaultCartState;

    default:
      return state;
  }
};

const persistToStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const incrementCartQtyHandler = (id) => {
    dispatchCartAction({ type: "INCREMENT_QTY", id: id });
  };

  const decrementCartQtyHandler = (id) => {
    dispatchCartAction({ type: "DECREMENT_QTY", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR_CART" });
  };

  const toggleCartHandler = () => {};

  const store = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalItems: cartState.totalItems,
    shipping: cartState.shipping,
    grandTotal: cartState.grandTotal,
    currency: cartState.currency,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
    toggleCart: toggleCartHandler,
    incrementCartQtyHandler: incrementCartQtyHandler,
    decrementCartQtyHandler: decrementCartQtyHandler,
  };
  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export default CartProvider;
