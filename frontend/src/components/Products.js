import React from "react";
import "../style/Products.css";
import { popularProducts } from "../Data";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Products = () => {
  return (
    <div className="products">
      {popularProducts.map((product, key) => {
        return (
          <div className="product" key={key}>
            <div className="figure" id={product.id}>
              <div className="figure-inner">
                <img src={product.img} alt="img" className="product-img" />
                <div className="figure-text">
                  <p className="name">{product.name}</p>
                  <p className="price"> {product.price} €</p>
                </div>
                <div className="figure-bottom">
                  <ShoppingBasketIcon style={{ cursor: "pointer" }} />
                  <FavoriteIcon style={{ cursor: "pointer" }} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
