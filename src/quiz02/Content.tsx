import { useContext } from "react";
import MyContext from "../context/MyContext";

const Content = ({ step }: { step: number }) => {
  const { products } = useContext(MyContext);

  let productosPasoActual = [];

  if (step >= 4) {
    productosPasoActual = products;
  } else {
    productosPasoActual = products.filter((producto) => producto.step === step);
  }
  return (
    <div className="card">
      <h2>Productos del paso {step}</h2>
      <div>
        {productosPasoActual.map(producto => (
          <div key={producto.id}>
            <p>{producto.name}</p>
            <p>Precio: ${producto.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
