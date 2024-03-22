import { useState } from "react";

export const ItemCount = ({ onAdd, stock, valorInicial=1 }) => {

  const [count, setCount] = useState(valorInicial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("stock maximo");
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else "no puede ser menos de 1";
  };

  return (
    <div>
      <div>
        <button onClick={increment}>+</button>
        <strong style={{ color: "white" }}>{count}</strong>
        <button onClick={decrement}>-</button>
      </div>
      <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};
