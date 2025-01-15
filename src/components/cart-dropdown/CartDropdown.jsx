import { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import "./CartDropdown.scss";
import { Button } from "../button/Button";
import { CartItem } from "../cart-item/CartItem";

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};
