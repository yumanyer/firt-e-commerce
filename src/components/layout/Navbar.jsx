
import React from "react";

import CartWidget from "../common/CartWidget";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importa el archivo CSS

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-list">
          <Link to="/" className="navbar-link">
            <li className="navbar-item">Home</li>
          </Link>
          <Link to="/categoria/Nuevas" className="navbar-link">
            <li className="navbar-item">Hamburguesas Nuevas</li>
          </Link>
          <Link to="/categoria/Las mas pedidas" className="navbar-link">
            <li className="navbar-item">Las Más Pedidas</li>
          </Link>
        </ul>
        <div className="navbar-logo">
          <img src="" alt="" className="navbar-image" />
        </div>
        <Link to="/cart" className="navbar-cart">
          <CartWidget />
        </Link>
      </div>
    </nav>

  );
};
