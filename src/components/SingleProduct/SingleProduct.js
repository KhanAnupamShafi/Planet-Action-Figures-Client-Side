import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../shared/Navigation/Navigation";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Navigation />
      <h2>single product info</h2>
    </div>
  );
};

export default SingleProduct;
