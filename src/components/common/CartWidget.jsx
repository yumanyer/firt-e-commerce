import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { tooltipClasses } from "@mui/material";

const CartWidget = () => {
  const { cantidadTotaItem } = useContext(CartContext);

  let total = cantidadTotaItem();
  return (
    <>
      <span>{total}</span>
      <FaShoppingCart color="white" />
    </>
  );
};

export default CartWidget;
