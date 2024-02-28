import { useEffect, useState } from "react";
import { getProducts } from "../../productMock";
import { ItemList } from "../common/ItemList";
import { useParams } from "react-router-dom";
import { FaSpinner } from "react-icons/fa6";
export const ItemListContainer = () => {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((resp) => {
        // Filtrar los productos por categoría si se proporciona una categoría en los parámetros de la URL
        if (categoria) {
          const productosFiltrados = resp.filter((producto) => producto.categoria === categoria);
          setProductos(productosFiltrados);
        } else {
          // Si no se proporciona una categoría, mostrar todos los productos
          setProductos(resp);
        }
        setIsLoading(false);
      })
      .catch((error) => console.error("Error al obtener los productos:", error));
  }, [categoria]);

  return (
    <div>
      {isLoading ? (
        <FaSpinner size={32} />
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
