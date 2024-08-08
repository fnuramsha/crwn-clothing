import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";

const CartIcon = () => {
  const { isCartOpen, setCartOpen } = useContext(CartContext);

  const toggle = () => setCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggle}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count"> 0</span>
    </div>
  );
};

export default CartIcon;
