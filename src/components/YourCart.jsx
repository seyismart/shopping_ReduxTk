import React from "react";
import { useSelector } from "react-redux";
import ShowCart from "./ShowCart";
//import "./Cart.css"

const YourCart = () => {
  const cartbelow = useSelector((state) => state.mycart.itemOfCart);
  return (
    <div>
      <h2 style={{ textAlign: "center", paddingTop: "35px" }}>Your Cart</h2>
      <ul>
        {cartbelow.map((cart) => (
          <li key={cart.id}>
            <ShowCart
              id={cart.id}
              name={cart.name}
              totalPrice={cart.totalPrice}
              quantity={cart.quantity}
              price={cart.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
 export default YourCart;