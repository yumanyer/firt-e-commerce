import { useEffect, useState } from "react";
import { ItemDetail } from "../common/ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../../productMock";

export const ItemDetailContainer = () => {
  //tenemos que conseguir esa info del parametro de nuestra app

  const { id } = useParams(); //hoock de react-router-dom (detecta el parametro que estamos ingresadno en el navegador)
  //los parametros tiene que tener el mismo  nombre sino no lo encontraria
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProduct(id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, []);
  return (
    <>{isLoading ? <h2>Cargando producto...</h2> : <ItemDetail {...item} />}</>
  );
};