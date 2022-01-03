import React from "react";
import Navbar from "../components/Navbar";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import "../style/Product-page.css";
import { popularProducts } from "../Data";
import Footer from "../components/Footer";
const Product = () => {
  const onproduct = popularProducts;
  const data = onproduct.find((product) => product.id);
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="product-page">
      <Navbar />
      <div className="product-page-container">
        <div className="product-page-fig-img">
          <img src={data.img} alt="Product-img" />
        </div>
        <div className="product-page-fig-caption">
          <div className="product-page-fig-caption-description">
            <span> {data.name}</span>
            <span> {data.price} €</span>
          </div>
          <select>
            {data.size.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <div className="product-page-btn">
            <Button onClick={handleClick} variant="contained">
              ajouter au panier
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              message="Produit ajouté au panier"
              action={action}
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Product;
