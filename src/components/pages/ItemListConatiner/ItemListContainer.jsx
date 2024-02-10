import { useState, useEffect } from "react";
import ItemList from "./ItemlList";

export const ItemListContainer = () => {
  // peticion a la api
  // useState
  // funciones
  // variables

  const [items, setItems] = useState(0);

  const [nombre, setNombre] = useState("pepito");

    const saludar = () => {
    setNombre("maria");
};
    const saludar2 = () => {
    setNombre("pochoclo");
};
    

  useEffect(() => {
    console.log("se hace la peticion");
  }, []) //SE LE PASA UN CALLBACK Y UN ARRAY DE DEPENCIA

return <ItemList nombre={nombre} saludar={saludar} saludar2={saludar2} />;
};
