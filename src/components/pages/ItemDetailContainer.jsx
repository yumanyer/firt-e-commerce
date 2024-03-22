import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "../common/ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa6";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import {collection,doc,getDoc} from "firebase/firestore"

export const ItemDetailContainer = () => {
  //tenemos que conseguir esa info del parametro de nuestra app

  const { id } = useParams(); //hoock de react-router-dom (detecta el parametro que estamos ingresadno en el navegador)
  //los parametros tiene que tener el mismo  nombre sino no lo encontraria
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { agregarItem,quantityId } = useContext(CartContext);

  const valorInicial = quantityId(+id)
  console.log(valorInicial)

  useEffect(() => {
    let productoCollection = collection(db, "productos");
    let refDoc = doc(productoCollection, id);
    getDoc(refDoc).then(docSnap => {
      if (docSnap.exists()) {
        setItem({ ...docSnap.data(), id: docSnap.id });
        setIsLoading(false); // Establece isLoading como false una vez que se ha cargado el item
      } else {
        console.log("El documento no existe");
        setIsLoading(false); 
      }
    }).catch(error => {
      console.error("Error al obtener el documento:", error);
      setIsLoading(false); 
    });
  }, [id])

  const onAdd = (cantidad) => {
    let infoProduct = {
      ...item,
      quantity: cantidad,
    };
    agregarItem(infoProduct);
    // simulacion de  navegar al cart con el hook navigate
    // navigate("/Cart");
  };
  return (
    <>
      (
      {isLoading ? 
        <FaSpinner size={32} />
        : (
        <ItemDetail {...item} onAdd={onAdd} valorInicial= {valorInicial}/>
      )}
      )
    </>
  );
};
