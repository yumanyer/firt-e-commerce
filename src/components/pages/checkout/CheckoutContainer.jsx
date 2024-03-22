import React, { useContext, useState } from "react";
import Checkout from "./Checkout";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";


const CheckoutContainer = () => {
  // creamos un estado para capturar informacion del usario
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // Aquí, setOrderId debería ser una función para actualizar el orderId, no una variable constante
  const [orderId, setOrderId] = useState(null);

  const { cart, precioTotal } = useContext(CartContext);
  let totalPrice = precioTotal();
  //   la funcion se dispara cuando envio el form (LA VALIDACION DE DATOS TIENE QUE SER EN EL ENVIO DE FORM)
  const envioDeFormulario = (event) => {
    //no se recarga la pag si se envia el form
    // manipulacion de datos
    event.preventDefault();
    // FUNCION
    let order = {
      //info cliente
      buyer: userInfo,
      //info items
      items: cart,
      //info precio total
      total: totalPrice,
    };

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((resp) => setOrderId(resp.id)); // Corregido aquí
  };

  const capturarData = (event) => {
    // seteo userinfo con un objet
    // para no perder datos user el ...userInfo y cuando encuentra otra prop
    // que ya tenia deja la que tenia y toma la que se encontro
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  return (
    <Checkout
      orderId={orderId}
      envioDeFormulario={envioDeFormulario}
      capturarData={capturarData}
    />
  );
};
export default CheckoutContainer;