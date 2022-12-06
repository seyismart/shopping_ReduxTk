import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Auth from "./components/Auth"
import Layout from './components/Layout';
import React from 'react';
import Notification from './components/Notification';

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
const cart = useSelector(state => state.mycart);

useEffect(() => {
const Data = async () => {
  const res = await fetch("https://shopping-cart-75ca3-default-rtdb.firebaseio.com/allCartItems.json", {
    method : "PUT",
    body : JSON.stringify(),
  })
  const get = await res.json()
  console.log(get);
  }
Data();
}, [cart])
  return (
    <div>
      <Notification type = "success" message= {"You welcome back!"} />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  )
}

export default App