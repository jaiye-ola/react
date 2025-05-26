import React, { useContext } from "react";
import Container from "../../../ecommerce/src/components/shared/Container";
import Carousel from "../../../ecommerce/src/components/Carousel";
import { ProductContext } from "../../../ecommerce/src/context/ProductContext";

function ProductDetails() {
  const products = useContext(ProductContext);
  const showItem = useParams();

  const productItem = products.find(
    (items) => parseInt(items.id) === parseInt(showItem)
  );
  console.log(productItem);
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img src="" alt="" className="w-full h-[400px]" />
        </div>
        <div>
          <div className="text-start space-y">
            <h1>Name: Product Name</h1>
            <h4>Description</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nemo
              perferendis odio.
            </p>
            <div className="mb-1">
              <button type="button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProductDetails;
