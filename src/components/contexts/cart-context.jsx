import { useState, useEffect } from "react";
import { createContext } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //return new array with modified carItems / new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// For checkout page

const incrementItem = (checkOutItems, productToAdd) => {
  const existingItem = checkOutItems.find(
    (checkOutItem) => checkOutItem.id === productToAdd.id
  );
  if (existingItem) {
    return checkOutItems.map((checkOutItem) =>
      checkOutItem.id === productToAdd.id
        ? { ...checkOutItems, quantity: checkOutItem.quantity + 1 }
        : checkOutItem
    );
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  checkoutItems: [],
  addItemInCheckoutCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [checkOutItems, setCheckOutItems] = useState([]);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    // Do I need to add new item or its existing in cartItems already
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const addItemInCheckoutCart = (productToAdd) => {
    setCheckOutItems(incrementItem(checkOutItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
