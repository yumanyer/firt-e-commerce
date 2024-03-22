import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { productos } from "./productMock";

export const AgregarDocs = () => {
  const rellenar = () => {
    let productosCollection = collection(db, "productos");
    productos.forEach( (element) => {
        addDoc(productosCollection, element);
    });
  };
  return <button onClick={rellenar}>AgregarDocs</button>;
};

export default AgregarDocs;
