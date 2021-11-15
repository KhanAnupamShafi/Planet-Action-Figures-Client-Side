import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Purchase from "../Purchase/Purchase";
import Navigation from "../shared/Navigation/Navigation";

const SingleProduct = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setSingleProduct(data));
  }, []);

  return (
    <div>
      <Navigation />
      <Purchase singleProduct={singleProduct} />
    </div>
  );
};

export default SingleProduct;
