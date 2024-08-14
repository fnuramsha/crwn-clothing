import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../components/contexts/cart-context";
const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  // return (
  //   <div>
  //     {cartItems.map((item) => (
  //       <CheckoutDetails key={item.id} checkOutItems={item} />
  //     ))}
  //   </div>
  // );
  return (
    <div>
      {cartItems.map((cartItem) => {
        const { id, name, quantity } = cartItem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br />
            <span onClick={() => addItemToCart(cartItem)}>increment</span>
            <br />
            <span onClick={() => removeItemToCart(cartItem)}>decrement</span>
          </div>
        );
      })}
    </div>
  );
};
export default Checkout;
