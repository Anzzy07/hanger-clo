import { useContext } from "react";

import { ProductsContext } from "../../context/product.context";
import "./Shop.style.scss";
import { ProductCard } from "../../components/product-card/ProductCard";

export const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
