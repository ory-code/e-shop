import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../style/Navbar.css";
const Navbar = () => {
  
  return (
    <div className="navbar">
      <header className="navbar-header">
        <div className="navbar-logo">
          <h1>Sacha</h1>
        </div>
        <div className="navbar-search">
          <input type="search" placeholder="Search" />
          <SearchIcon className="navbar-SearchIcon" />
        </div>
        <nav className="navbar-nav">
          <ul>
            <li>Our Products</li>
            <li>Sign In</li>
            {/* <ShoppingCartIcon className="navbar-ShoppingCartIcon" /> */}
            <IconButton aria-label="cart">
              <Badge badgeContent={4} color="success">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
