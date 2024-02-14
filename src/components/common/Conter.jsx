import React, { useState } from "react";

export const Conter = () => {
  // Utilizamos useState para mantener el estado del contador
  const [count, setCount] = useState(0);

  // Función para aumentar el contador
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* Mostramos el valor actual del contador */}
      <p>Contador: {count}</p>
      {/* Llamamos a la función increment cuando se hace clic en el botón */}
      <button onClick={increment}>sumar</button>
    </div>
  );
};
