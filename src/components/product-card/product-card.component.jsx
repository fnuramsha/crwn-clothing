import "./product-card.styles.scss";
import Button from "../Button/button.component";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/cart-context";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button type="button" onClick={addProductToCart} buttonType="inverted">
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
