/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Purchase from "../Purchase/Purchase";
import Navigation from "../shared/Navigation/Navigation";

const SingleProduct = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    fetch(`https://murmuring-bayou-10657.herokuapp.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setSingleProduct(data));
  }, []);

  return (
    <div>
      <Navigation />
      <Purchase singleProduct={singleProduct} />
      <Footer />
    </div>
  );
};

export default SingleProduct;
