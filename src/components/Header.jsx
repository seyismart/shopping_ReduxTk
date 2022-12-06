import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import CartDisplay from "./CartDisplay";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(authActions.logout());
  };
  return (
    <div>
      <header>
        <nav className="header-nav">
          <ul className="header-ul">
            <li>
              <h2>
                Redux Shopping App
              </h2>
            </li>
            <li className="cartdsplay">
              <CartDisplay />
            </li>
            <button onClick={logout} className="logout">
              logout
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;
