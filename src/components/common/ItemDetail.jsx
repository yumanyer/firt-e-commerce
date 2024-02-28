import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ nombre, descripcion, img, precio, stock }) => {
  return (
    <div className="border m-2">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{nombre}</h5>
          <img src={img} alt={nombre} />
          <p className="card-text">{descripcion}</p>
          <p>Precio: {precio}</p>
          <p>Stock: {stock}</p>
          <ItemCount stock={stock} />
        </div>
      </div>
    </div>
  );
};
