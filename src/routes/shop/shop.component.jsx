// import SHOP_DATA from "../../shop-data.json";
import { useContext } from "react";

import { ProductsContext } from "../../components/contexts/product-context";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  // usage of useContext
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Shop;
