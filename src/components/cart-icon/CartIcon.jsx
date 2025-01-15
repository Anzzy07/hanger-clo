import { ReactComponent as Cart } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";

export const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <Cart className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
