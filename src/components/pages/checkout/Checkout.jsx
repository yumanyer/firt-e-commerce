import React from "react";

const Checkout = ({ envioDeFormulario, capturarData }) => {
  return (
    <>
      <h1>Aca va el checkout</h1>
{/* el nombre del input = la propiedad que quiero modificar */}
      <form onSubmit={envioDeFormulario}>
        <input type="text" placeholder="ingresa tu nombre"  onChange={capturarData} name="name"/>
        <input type="text" placeholder="ingresa tu apellido"onChange={capturarData} name="lastName"/>
        <button>Enviar</button>
      </form>
    </>
  );
};

export default Checkout;
