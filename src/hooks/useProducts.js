import { useEffect, useState } from "react";

const useProducts = () => {
  const [loaded, setLoaded] = useState(false);

  const [productsAll, setProductsAll] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsAll(data);
        setLoaded(true);
      });
  }, []);

  return { productsAll, setProductsAll, loaded };
};

export default useProducts;
