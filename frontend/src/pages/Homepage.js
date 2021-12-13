import React from "react";
import Annoncement from "../components/Annoncement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import Products from "../components/Products";
// import TopPage from "../components/TopPage";

const Homepage = () => {
  return (
    <div>
      <Annoncement />
      <Navbar />
      {/* <TopPage /> */}
      <Presentation />
      <Products />
      <Footer />
    </div>
  );
};

export default Homepage;
