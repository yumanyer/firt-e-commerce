// ItemCount.jsx
import React from "react";

const ItemCount = ({ counter, addOne, subOne }) => {
  return (
    <>
      <button onClick={subOne} disabled={counter===1 ? true:false}>Restar</button>
      <h4>{counter}</h4>
      <button onClick={addOne}>Sumar</button>
      <button>agregar al carrito</button>
    </>
  );
};

export default ItemCount;

