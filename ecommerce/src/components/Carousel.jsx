import React from "react";

function Carousel(className, flex = "", banner = "Unveil Your Signature Look") {
  return (
    <div className="carousel h-[90vh] relative">
      <img src="img/w3.jpg" className="w-full object-hover" alt="" />
      <div className="carousel-items absolute top-[25%] left-[50%] w-[80%] md:w-[50%]">
        <h5 className="text-4xl lg:text-6xl text-white top:-[40] lg:top-[20]">
          UNVEIL YOUR SIGNATURE LOOK
        </h5>
        <div className="flex flex-wrap items-center justify-start gap-5">
          <button
            type="button"
            className="bg-[#004F5C] text-white capitalize hover:bg-white hover:text-{#004F5C} duration-500 transition-all p-3 w-[30%]"
          >
            Shop Now
          </button>
          <button
            type="button"
            className="border-white text-white capitalize hover:bg-white hover:text-{#004F5C} duration-50 transition-all p-3 w-[30%]"
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
