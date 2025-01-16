import { useContext } from "react";

import { ReactComponent as Cart } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ItemCount } from "./CartIcon.style";
import { CartContext } from "../../context/cart.context";

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCardOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleCardOpen}>
      <Cart className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
