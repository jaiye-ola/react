import React from "react";
// import link
import Container from "./shared/Container";
import Carousel from "./Carousel";
// import react trash icon

function Cart() {
  return (
    <div>
      <Carousel
        className="lg:h-[20vh] mb-12 lg:text-[10px]"
        flex="hidden"
      ></Carousel>
      <Container className={"mt-5 mb-12"}>
        <div className="overflow-auto lg:overflow-hidden"></div>
        <table className="w-full capitalize text-center ">
          <thead>
            <tr className="px-2 py-3">
              <th className="px-2 py-3">s/n</th>
              <th className="px-2 py-3">product name</th>
              <th className="px-2 py-3">product image</th>
              <th className="px-2 py-3">price</th>
              <th className="px-2 py-3">quantity</th>
              <th className="px-2 py-3">update</th>
              <th className="px-2 py-3">amount</th>
              <th className="px-2 py-3">delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t hover:bg-gray-300">
              <td className="px-4 py-3 text-left">1</td>
              <td className="px-4 py-3 text-left">product 1</td>
              <td className="px-4 py-3 text-left">
                <img src="" alt="" className="w-[50px]" />
              </td>
              <td className="px-4 py-3 text-left"># 300</td>
              <td className="px-4 py-3 text-left">3</td>
              <td className="px-4 py-3 text-left">
                <input
                  type="number"
                  name=""
                  min={1}
                  value={1}
                  id=""
                  className="w-14 border-gray-500 rounded-md"
                />
              </td>
              <td className="px-4 py-3 text-left">#600</td>
              <td className="px-4 py-3 text-left">
                <button type="submit" className="text-red">
                  {/* React trash icon */}
                </button>
              </td>
            </tr>
            <tr className="border-t hover:bg-gray-300">
              <td className="px-4 py-3 text-left">1</td>
              <td className="px-4 py-3 text-left">product 1</td>
              <td className="px-4 py-3 text-left">
                <img src="" alt="" className="w-[50px]" />
              </td>
              <td className="px-4 py-3 text-left"># 300</td>
              <td className="px-4 py-3 text-left">3</td>
              <td className="px-4 py-3 text-left">
                <input
                  type="number"
                  name=""
                  min={1}
                  value={1}
                  id=""
                  className="w-14 border-gray-500 rounded-md"
                />
              </td>
              <td className="px-4 py-3 text-left">#600</td>
              <td className="px-4 py-3 text-left">
                <button type="submit" className="text-red">
                  {/* React trash icon */}
                </button>
              </td>
            </tr>
            <tr className="border-t hover:bg-gray-300">
              <td className="px-4 py-3 text-left">1</td>
              <td className="px-4 py-3 text-left">product 1</td>
              <td className="px-4 py-3 text-left">
                <img src="" alt="" className="w-[50px]" />
              </td>
              <td className="px-4 py-3 text-left"># 300</td>
              <td className="px-4 py-3 text-left">3</td>
              <td className="px-4 py-3 text-left">
                <input
                  type="number"
                  name=""
                  min={1}
                  value={1}
                  id=""
                  className="w-14 border-gray-500 rounded-md"
                />
              </td>
              <td className="px-4 py-3 text-left">#600</td>
              <td className="px-4 py-3 text-left">
                <button type="submit" className="text-red">
                  {/* React trash icon */}
                </button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td
                className="px-4 py-3 text-right font-semibold uppercase"
                colSpan={"2"}
              >
                Subtotal: #3,000.00
              </td>
            </tr>
            <tr>
              <td
                className="px-4 py-3 text-right font-semibold uppercase"
                colSpan={"2"}
              >
                VAT: (0.075%) #250.00
              </td>
            </tr>
            <tr>
              <td
                className="px-4 py-3 text-right font-semibold uppercase"
                colSpan={"2"}
              >
                Total: #3,250.00
              </td>
            </tr>
            <tr>
              <td
                className="px-4 py-3 text-right font-semibold uppercase"
                colSpan={"2"}
              >
                <Link className="bg-blue-500 text-white hover:bg-white hover:text-blue-500">
                  Proceed to checkout
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default Cart;
