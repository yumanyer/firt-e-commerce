import { Link } from "react-router-dom";

export const Item = ({ id, nombre, img, description, precio }) => {
  return (
    <div className="card m-2">
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <img src={img} alt={nombre} className="img-fluid mb-3" />
        <p className="card-text">{description}</p>
        <p style={{ color: 'white' }}>Precio: {precio}</p> {/* Aplica el color blanco al precio */}
        <Link to={`/item/${id}`} className="btn btn-primary">Detalles</Link>
      </div>
    </div>
  );
};

export default Item;


