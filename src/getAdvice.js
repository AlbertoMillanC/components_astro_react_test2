const getAdvice = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "GET",
  });
  const resp = await response.json();
  const body = resp.body; // <-- añadir esta línea
  return { body }; // <-- y devolver el objeto con el nombre
};

export default getAdvice;
