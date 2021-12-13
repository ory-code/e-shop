import React from "react";
import "../style/Basket.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Basket = () => {
  return (
    <div>
      <Navbar />
      <h1 className="basket-title" >Votre panier</h1>
      <div className="basket">
        <div className="basket-product">
          <img
            src="https://m.media-amazon.com/images/I/71vCcowkVCL._AC_UL320_.jpg"
            alt=""
          />
          <div className="basket-product-info">
            <p>Veste noir</p>
            <p>19€</p>
          </div>
        </div>
        <div className="basket-subtotal">
          <div className="basket-title">
            <p>Sous-total (0) éléments</p>
            <p>15€</p>
          </div>
          <div className="basket-btn">
            <button type="submit">Envoyer</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
