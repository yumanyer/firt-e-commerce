import { ItemCount } from "./ItemCount";
import "./ItemDetail.css"; // Importa el archivo CSS

export const ItemDetail = ({
  nombre,
  descripcion,
  img,
  precio,
  stock,
  onAdd,
  valorInicial,
}) => {
  return (
    <div className="border">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <img src={img} alt={nombre} />
          <p className="card-text">{descripcion}</p>
          <p className="card-text">Precio: {precio}</p>
          <p className="card-text">Stock: {stock}</p>
          <ItemCount stock={stock} onAdd={onAdd} valorInicial={valorInicial} />
        </div>
      </div>
      {valorInicial && <h3>Ya tienes {valorInicial} en el carrito</h3>}
    </div>
  );
};
