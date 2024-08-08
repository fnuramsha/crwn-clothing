import { useState } from "react";
import { createContext } from "react";

const addCardItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  // if found, increment quantity
  //return new array with modified carItems / new cart item
};

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const value = { isCartOpen, setCartOpen };
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (productToAdd) => {
    // Do I need to add new item or its existing in cartItems already
    setCartItems(addCardItem(cartItems, productToAdd));
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
