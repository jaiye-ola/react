import { useContext, useState } from 'react'

export const ProductContext = createContext();


export const ProductProvider = ( children ) => {
  const {product, setProduct} =useState();
  console.log();
  

  const getProducts = async () => {
    const response = await fetch("http://localhost:5173/", {
      method: "6F1",
    });
    const data = await response.json()
    if(response.ok) {
      console.log("data", data)
    }
  }

  return(
    <ProductContext.Provider value={{}}>
      (children)
    </ProductContext.Provider>
  )

}