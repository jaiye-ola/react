import React from "react";
// import {BrowserRouter => Router, Routes}
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import About from "./components/About";
import ProductItem from "./components/ProductItem";
import { ProductProvider } from "./context/ProductContext";
import Featured from "./components/Featured";
import Trending from "./components/Trending";
import Footer from "./components/Footer";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes path="/product">
          <Route path="/home element=" />
        </Routes>
      </Router>
      <Header />
      <Carousel />
      <About />
      <Featured />
      <Trending />
      <Footer />
    </ProductProvider>
  );
}
export default App;
