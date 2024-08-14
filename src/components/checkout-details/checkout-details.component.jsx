import { CartContext } from "../contexts/cart-context";
import { useContext } from "react";

const CheckoutDetails = ({ checkOutItems }) => {
  const { imageUrl, name, quantity, price } = checkOutItems;
  const { addItemInCheckoutCart } = useContext(CartContext);
  const incrementHandler = () => addItemInCheckoutCart(checkOutItems);

  const deleteItem = () => {
    return console.log("deleted");
  };
  return (
    <div>
      <img src={imageUrl} alt={`${name}`} />
      <div>
        <span>{name}</span>
        <span> - </span>
        <span> {quantity} </span>
        <span onClick={incrementHandler}> + </span>
        <span> {price} </span>
        <span onClick={deleteItem}> X </span>
      </div>
    </div>
  );
};

export default CheckoutDetails;
