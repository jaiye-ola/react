import React from "react"
import Header from "./components/Header"
import Carousel from "./components/Carousel"
import About from "./components/shared/About"
import ProductItem from "./components/ProductItem"
import { ProductProvider } from "./context/ProductContext"

function App() {
  return
  <div>
    <Header/>
    <Carousel/>
    <About/>
    <ProductItem/>
    <ProductProvider/>
  </div>
  
}

export default App
