import React from "react";

const Checkout = ({ envioDeFormulario, capturarData, orderId }) => {
  return (
    <>
      {/* el nombre del input = la propiedad que quiero modificar */}
      {orderId ? (
        <h1>
          Gracias por su compra <br />su numero de compra es {orderId}
        </h1>
      ) : (
        <form onSubmit={envioDeFormulario}>
          <input
            type="text"
            placeholder="ingresa tu nombre"
            onChange={capturarData}
            name="name"
          />
          <input
            type="number"
            placeholder="ingresa tu telefono"
            onChange={capturarData}
            name="phone"
          />
          <input
            type="text"
            placeholder="ingresa tu email"
            onChange={capturarData}
            name="email"
          />
          <button>Comprar</button>
        </form>
      )}
    </>
  );
};

export default Checkout;
