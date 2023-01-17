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
    <div >
      <h1 className=" bg-slate-100 text-">GENERADOR </h1>

      {!currentProducts
        ? "cargando..."
        : currentProducts.map((products, index) => {
            return (
              <div  className=" " >
                 <div  className="container mt-4  " >
                 {products.title}
                 </div>
                {products.category} ;

                <div   className="container text-red-600 border-top  bg-slate-200 " >
                {products.description}
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default AdviceGenerator;
