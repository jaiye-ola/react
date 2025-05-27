import { createContext, useEffect, useState } from "react";
// import {getProducts} from

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const featured = product.filter((items) => items.featured === true);
  const trending = product.filter((items) => items.trending === true);

  useEffect(() => {
    getProducts();
  }, []);
  const fetchProduct = async(() => {
    const res = await(getProducts());
    if (res.ok) {
      setProduct(res);
    }
  });

  const getProducts = async () => {
    const response = await fetch("http://localhost:3000/product", {
      method: "GET",
    });
    const data = await response.json();
    if (response.ok) {
      // console.log("data", data)
      setProduct(data);
    }
  };

  return (
    <ProductContext.Provider value={{ product, featured, trending }}>
      {children}
    </ProductContext.Provider>
  );
};
