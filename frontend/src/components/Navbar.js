import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import "../style/Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <header className="navbar-header">
        <div className="navbar-logo">
          <h1 onClick={() => navigate("/")}>Sacha</h1>
        </div>
        <div className="navbar-search">
          <input type="search" placeholder="chercher..." />
          <SearchIcon className="navbar-SearchIcon" />
        </div>
        <nav className="navbar-nav">
          <ul>
            <li>Nos produits</li>
            <li onClick={() => navigate("/signin")}>Connexion</li>
            {/* <ShoppingCartIcon className="navbar-ShoppingCartIcon" /> */}
            <IconButton aria-label="cart">
              <Badge badgeContent={4} color="success">
                <ShoppingCartIcon onClick={() => navigate("/basket")} />
              </Badge>
            </IconButton>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
