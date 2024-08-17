import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../components/contexts/cart-context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart, cartTotal } =
    useContext(CartContext);

  // return (
  //   <div>
  //     {cartItems.map((item) => (
  //       <CheckoutDetails key={item.id} checkOutItems={item} />
  //     ))}
  //   </div>
  // );
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}

      <span className="Total"> Total: ${cartTotal}</span>
    </div>
  );
};
export default Checkout;
