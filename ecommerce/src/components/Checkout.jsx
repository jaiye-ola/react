import React from "react";
import Carousel from "./Carousel";
import Container from "./shared/Container";

function Checkout() {
  return (
    <div>
      <Carousel
        className="lg:h-[20vh] mb-12 lg:text-[10px]"
        flex="hidden"
      ></Carousel>
      <Container className={"mt-5 mb-12"}>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-3">
          <div className="bg-green-310">
            <h4>User Summary</h4>
          </div>
          <div className="shadow-lg py-14 px-5">
            <div className="new-form">
              <form action="">
                <div className="mb-1 w-full ">
                  <input
                    type="text"
                    className="outline-none w-full border border-gray-200 p-2 rounded"
                    name="full Name"
                    placeholder="Full Name"
                    id=""
                  />
                </div>
                <div className="mb-1 w-full ">
                  <input
                    type="email"
                    className="outline-none w-full border border-gray-200 p-2 rounded"
                    name="email"
                    placeholder="Email Address"
                    id=""
                  />
                </div>
                <div className="mb-1 w-full ">
                  <input
                    type="text"
                    className="outline-none w-full border border-gray-200 p-2 rounded"
                    name="email"
                    placeholder="Delivery Address"
                    id=""
                  />
                </div>
                <div className=" w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-2">
                  <div>
                    <input
                      type="tex"
                      className="outline-none w-full border border-gray-200 p-2 rounded"
                      name="phone"
                      placeholder="Phone Number"
                      id=""
                    />
                  </div>
                </div>
                <div>
                  <h5>#3,250</h5>
                </div>
                <div className="mb-3 w-full ">
                  <button
                    type="submit"
                    className="bg-[#003F55] w-full py-2 px-12 hover:bg-white hover:border [#003F55] rounded"
                  >
                    Proceed to Pay
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* <div className="bg-blue-310"></div> */}
        </div>
      </Container>
    </div>
  );
}

export default Checkout;
