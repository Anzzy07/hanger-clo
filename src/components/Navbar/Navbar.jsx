import { Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../context/user.context";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import "./Navbar.style.scss";
import { signOutUser } from "../../utils/firebase";
import { CartIcon } from "../cart-icon/CartIcon";
import { CartDropdown } from "../cart-dropdown/CartDropdown";

export const Navbar = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crown className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        <CartDropdown />
      </div>
    </>
  );
};
