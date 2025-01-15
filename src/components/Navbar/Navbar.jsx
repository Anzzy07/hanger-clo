import { Link } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import "./Navbar.style.scss";

export const Navbar = () => {
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
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
    </>
  );
};
