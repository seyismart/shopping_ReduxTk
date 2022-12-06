import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import "./auth.css"

const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="usernme" required />
        <label htmlFor="password">Password</label>
        <input type="password" required name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
