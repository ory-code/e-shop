import React from "react";
import "../style/Signin.css";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate();

  return (
    <div className="signin">
      <div className="navbar-logo">
        <h1 onClick={() => navigate("/")}>Sacha</h1>
      </div>
      <h2>Connection</h2>
      <form className="signin-form">
        <input type="email" className="input-email" placeholder="Email"></input>
        <input
          type="password"
          className="input-passowrd"
          placeholder="Password"
        ></input>
        <button type="submit" className="btn-signin-form">
          Envoyer
        </button>

        <h3 onClick={() => navigate("/login")}>Vous n'avez pas de compte ?</h3>
      </form>
    </div>
  );
};

export default Signin;
