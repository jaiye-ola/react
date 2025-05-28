import { createContext, useEffect, useState } from "react";
// import {getProducts} from

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const featured = product.filter((items) => items.featured === true);
  const trending = product.filter((items) => items.trending === true);

  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = async(() => {
    const data = getProducts();
    if (data) {
      setProduct(data);
    }
  });

  return (
    <ProductContext.Provider value={{ product, featured, trending }}>
      {children}
    </ProductContext.Provider>
  );
};
