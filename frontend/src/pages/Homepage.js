import React from "react";
import Annoncement from "../components/Annoncement";
import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import TopPage from "../components/TopPage";

const Homepage = () => {
  return (
    <div>
      <Annoncement />
      <Navbar />

      <TopPage />
      <Presentation />
    </div>
  );
};

export default Homepage;
