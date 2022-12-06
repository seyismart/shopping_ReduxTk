import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "./../store/cartSlice";
const ShowCart = ({ name, quantity, totalPrice, price, id }) => {
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(cartActions.addTocart({ id, name, price, quantity }));
  };
  const removeHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <div className="cartItem">
      <h2 className="name"> {name}</h2>
      <p className="price">&#8358; {price}</p>
      <p className="quantity">x{quantity}</p>
      <article className="article">Total Price &#8358; {totalPrice}</article>
      <button onClick={removeHandler} className="carts-action">
        -
      </button>
      <button onClick={addHandler} className="cart-actions">
        +
      </button>
    </div>
  );
};

export default ShowCart;
