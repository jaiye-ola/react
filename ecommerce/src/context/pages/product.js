import baseUrl from "react";

export const getProducts = async () => {
  const response = await fetch(
    `${baseUrl}/product`
    // method: "GET",
  );
};
console.log(response);
if (response.ok) {
  return response.json();
}
