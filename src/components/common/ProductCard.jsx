
import "./ProductCard.css";

export const ProductCard = ({ img, title, description, price }) => {
  return (
    <div className="product-card">
      <img src={img} alt="" />
      <h1 className="product-title">{title} hola munda</h1>
      <h3 className="product-description">{description}</h3>
      <h3 className="product-price">{price}</h3>
    </div>
  );
};

