import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export const Cart = () => {
  const { cart, limpiarCarrito, eliminarId, precioTotal } = useContext(CartContext);
  let total = precioTotal()
  return (
    <>
      {cart.map((producto) => (
        <div key={producto.id} style={{border : "2px solid black"}}>
          <h2>Nombre:{producto.nombre}</h2>
          <h3>Cantidad:{producto.quantity}</h3>
          <h4>Precio:{producto.precio}</h4>
          <button onClick={()=>eliminarId(producto.id)}>Eliminar Producto</button>
        </div>
      ))}
      <h2>Precio Total: ${total}</h2>
      <button onClick={limpiarCarrito} >eliminar carrito</button>
      <Link to="/checkout">
        <Button variant="contained">Terminar compra</Button>
      </Link>
    </>
  );
};
