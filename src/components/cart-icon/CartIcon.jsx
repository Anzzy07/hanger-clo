import { useContext } from "react";

import { ReactComponent as Cart } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";
import { CartContext } from "../../context/cart.context";

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleCardOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleCardOpen}>
      <Cart className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
