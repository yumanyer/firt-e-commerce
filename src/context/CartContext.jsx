import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarItem = (productos) => {
    let existe = isInCart(productos.id);
    // si el producto existe recorro el array genero uno nuevo
    // donde estaran los productos como estaban
    // exsepto el elemento en cuestion
    // sino que se le agrega mas quantity del que ya tenia
    if (existe) {
      let array = cart.map((elemento) => {
        if (elemento.id === productos.id) {
          return {
            ...elemento,
            quantity: productos.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(array);
    }
    // si no existe agrega el producto al carrito
    else {
      setCart([...cart, productos]);
      console.log(productos);
    }
  };
  const limpiarCarrito = () => {
    setCart([]);
  };
  // valida que el item que se esta agregando al carrito existe o no
  const isInCart = (id) => {
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };
  const eliminarId = (id) => {
    //  crea un nuevo array que excluye el producto que deseo eliminar
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
  };
  const cantidadTotaItem = () => {
    let totalItems = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.quantity;
    }, 0);
    return totalItems;
  };

  const precioTotal = () => {
    let total = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.quantity * elemento.precio;
    }, 0);

    return total;
  };

  const quantityId = (id)=>{
    // si find encuentra los que busca devuelve ese elemenot sino undefinide
    let producto = cart.find((elemento)=>elemento.id === id)

    if (producto){
      return producto.quantity
    }else{
      return producto
    }
  
  }

  let data = {
    cart,
    agregarItem,
    limpiarCarrito,
    eliminarId,
    cantidadTotaItem,
    precioTotal,
    quantityId,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
