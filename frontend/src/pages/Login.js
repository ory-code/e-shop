import React from "react";
import "../style/Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="navbar-logo">
        <h1 onClick={() => navigate("/")}>Sacha</h1>
      </div>
      <h2>Inscription</h2>
      <form className="login-form">
        <input
          type="text"
          className="input-firstname"
          placeholder="Prénom"
        ></input>
        <input type="text" className="input-name" placeholder="Nom"></input>
        <input type="email" className="input-email" placeholder="Email"></input>
        <input
          type="password"
          className="input-passowrd"
          placeholder="Mots de passe"
        ></input>
        <button type="submit" className="btn-login-form">
          Envoyer
        </button>
      </form>
      <p>
        En créant un compte, je consens au traitement de mes données
        personnelles données conformément à la politique de confidentialité
      </p>
      <h3 onClick={() => navigate("/signin")}>Vous avez déjà un compte ?</h3>
    </div>
  );
};

export default Login;
