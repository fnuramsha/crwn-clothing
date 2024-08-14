import { useContext } from "react";
import CartItem from "../../components/cart-item/cart-item.component";
import CheckoutDetails from "../../components/checkout-details/checkout-details.component";
import { CartContext } from "../../components/contexts/cart-context";
const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      {cartItems.map((item) => (
        <CheckoutDetails key={item.id} checkOutItems={item} />
      ))}
    </div>
  );
};
export default Checkout;
