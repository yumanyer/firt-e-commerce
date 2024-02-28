import React from "react";
import { Item } from "./Item"; // Importar el componente Item

export const ItemList = ({ productos }) => {
  return (
    <>
      <div className="d-flex flex-wrap">
        {productos.map((producto) => (
          <Item key={producto.id} {...producto} />
        ))}
      </div>
    </>
  );
};

export default ItemList; // Exportar el componente ItemList por defecto

