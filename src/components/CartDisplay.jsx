import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import "./Cart.css";

const CartDisplay = () => {
  const cartQuantity = useSelector((state) => state.mycart.totalQuantity);
  const dispatch = useDispatch();
  const showcart = () => {
    dispatch(cartActions.setShowCart());
  };
  return (
    <div>
      <button onClick={showcart} className="cartIcon">
        cart: {cartQuantity} Items{" "}
      </button>
    </div>
  );
};

export default CartDisplay;
