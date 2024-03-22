import React, { useState } from "react";
import Checkout from "./Checkout";

const CheckoutContainer = () => {
  // creamos un estado para capturar informacion del usario
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
  });
  //   la funcion se dispara cuando envio el form (LA VALIDACION DE DATOS TIENE QUE SER EN EL ENVIO DE FORM)
  const envioDeFormulario = (event) => {
    event.preventDefault();
    //no se recarga la pag si se envia el form
    // manipulacion de datos
    console.log("envio de formulario");
    console.log(userInfo);
  };


  const capturarData = (event) => {
    // seteo userinfo con un objet
    // para no perder datos user el ...userInfo y cuando encuentra otra prop 
    // que ya tenia deja la que tenia y toma la que se encontro
    setUserInfo({...userInfo, [event.target.name]:event.target.value});
  }
  return (
    <Checkout
      envioDeFormulario={envioDeFormulario}
      capturarData={capturarData}
    />
  );
};

export default CheckoutContainer;
