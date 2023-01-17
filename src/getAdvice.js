const getAdvice = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const resp = await response.json();
  const body = resp.title; // <-- añadir esta línea
  return { body }; // <-- y devolver el objeto con el nombre
};

export default getAdvice;
