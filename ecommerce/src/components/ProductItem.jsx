import React from "react";

function ProductItem({ productitems }) {
  return (
    <div className="border shadow-xl h-[20rem]">
      <img
        src={productitems.img || "/img/w4.jpg"}
        className="w-full object-cover"
        alt=""
      />
      <div className="border-1 p-2">
        <h1>{productitems.name}</h1>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at aut laborum provident hic amet!</p> */}
        <div className="flex text-center flex-wrap justify-around items-center gap-5">
          <button type="button" className="w-[40%] capitalize bg-[#0034FC] p-2">
            Add to Cart
          </button>
          <a href="" className="border-[#0034FC]">
            View More
          </a>
          ``
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
