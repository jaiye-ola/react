import React from "react";
import { useContext } from "react";
import Container from "../../components/shared/Container";
import ProductItem from "../../components/ProductItem";

function Products() {
  useContext(ProductContext);
  return;
  <Container>
    <div className="grid grid-cols-3 justify-center items-center gap-3">
      <h1>Featured Products</h1>
      ()
      {featured.map((items) => (
        <ProductItem productitems={items} key={items.id} />
      ))}
      {/* (featured.map((items) = )) */}
    </div>
  </Container>;
}

export default Products;
