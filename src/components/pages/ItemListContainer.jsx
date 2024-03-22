import { useEffect, useState } from "react";
import { ItemList } from "../common/ItemList";
import { useParams } from "react-router-dom";
import { FaSpinner } from "react-icons/fa6";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let productosCollection = collection(db, "productos");

    let consulta;

    if (categoria) {
      let productosFiltrados = query(
        productosCollection,
        where("categoria", "==", categoria)
      );
      consulta = productosFiltrados;
    } else {
      consulta = productosCollection;
    }

    // Verifico si categoria tiene un valor
    getDocs(consulta)
      .then((resp) => {
        let arrayLegible = resp.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });
        setProductos(arrayLegible);
      })
      .finally(() => {
        setIsLoading(false);
      });

    setIsLoading(false); // Establece isLoading como falso si categoria es undefined
  }, [categoria]);

  return (
    <div>
      {isLoading ? <FaSpinner size={32} /> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
