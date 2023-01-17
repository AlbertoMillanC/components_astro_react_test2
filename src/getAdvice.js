const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products", {
    method: "GET",
  });
  const resp = await response.json();
  return resp.products;
};
export default getProducts;
