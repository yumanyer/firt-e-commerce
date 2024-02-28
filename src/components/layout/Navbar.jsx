import CartWidget from "../common/CartWidget";
import { Link } from "react-router-dom";

export const pochoclo = () => {
  // Exportación nombrada
};

export const Navbar = () => {
  return (
    <nav className="d-flex justify-content-around mt-2">
      <div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/categoria/Nuevas">
            <li>Hamburguesas Nuevas</li>
          </Link>
          <Link to="/categoria/Las mas pedidas">
            <li>Las Más Pedidas</li>
          </Link>
        </ul>
        <div>
          <img src="" alt="" />
        </div>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
};
