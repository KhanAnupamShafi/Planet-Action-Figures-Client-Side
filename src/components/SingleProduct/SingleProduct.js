import React from "react";
import { useParams } from "react-router-dom";
import Purchase from "../Purchase/Purchase";
import Navigation from "../shared/Navigation/Navigation";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Navigation />
      <Purchase />
    </div>
  );
};

export default SingleProduct;
