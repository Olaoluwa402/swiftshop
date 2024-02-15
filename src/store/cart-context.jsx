import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  totalItems: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
  toggleCart: () => {},
});

export default CartContext;
