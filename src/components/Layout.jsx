import React from "react";
import Header from "./Header";
import DummyData from "./Products";
import "./Layout.css";
import YourCart from "./YourCart";
import { useSelector } from "react-redux";

const Layout = () => {
  let total = 0 
  const foreach = useSelector((state) => state.mycart.itemOfCart)
  foreach.forEach((item) => {
    total += item.totalPrice
  })
  // console.log(total);
    const showCrt = useSelector((state) => state.mycart.showCart)

  return (
    <div className="layout">
      <Header />
      <DummyData />
      {showCrt && <YourCart />}
      <div className="total-price">
        <h3>Total: $ {total}</h3>
        <button className="orderBtn">Place Order</button>
      </div>
    </div>
  );
};

export default Layout;
