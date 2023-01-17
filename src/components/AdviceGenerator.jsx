import { useState, useEffect } from "react";
import getProducts from "../getAdvice";

const AdviceGenerator = ({ products: initialProducts }) => {
  const [currentProducts, setCurrentProducts] = useState(initialProducts);

  const fetchApi = async () => {
    const responseJSON = await getProducts();
    setCurrentProducts(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div>
      <h1 className="bg-slate-100 text-">GENERADOR </h1>
      <ul>
        {!currentProducts
          ? "cargando..."
          : currentProducts.map((products, index) => {
              return <li key={index}>{products.title}</li>;
            })}
      </ul>
    </div>
  );
};



export default AdviceGenerator;


