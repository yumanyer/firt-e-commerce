const ItemlList = ({ nombre, saludar, saludar2 }) => {
  return (
    <div>
        <h2>Hola {nombre}</h2>
        <button onClick={saludar}>saludar</button>
        <button onClick={saludar2}>saludar2</button>
    </  div>
  );
};

export default ItemlList;