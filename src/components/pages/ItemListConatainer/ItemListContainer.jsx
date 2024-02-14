import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { productos } from "../../../productMock";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]); // Corregir 'useStates' a 'useState'

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(productos);
      // reject("ERROR")
    });

    tarea
      .then((res) => {
        setItems(res); // Corregir el método 'set'
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(items);

  return (
    <>
      <ItemList items={items} /> {/* Pasar los productos como prop al componente ItemList */}
    </>
  );
};
