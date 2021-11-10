import React from "react";
import Featured from "../../components/Featured/Featured";
import Products from "../../components/Products/Products";
import Navigation from "../../components/shared/Navigation/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation />

      <Featured />

      <Products />
    </div>
  );
};

export default Home;
