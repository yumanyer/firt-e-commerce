
import "./ProductCard.css";

export const ProductCard = ({ img, title, description, price }) => {
  return (
    <div className="product-card" style={{ border: "2px solid black" }}>
      <img src={img} alt="" />
      <h1 className="product-title">{title}</h1>
      <h3 className="product-description">{description}</h3>
      <h3 className="product-price">{price}</h3>
    </div>
  );
};

