import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import "./Product.css";

const Product = ({ id, name, price, imgURL }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addTocart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <button onClick={addToCart} className="btn">
        Add to cart
      </button>
      <p>&#8358; {price} </p>
    </div>
  );
};
export default Product;
