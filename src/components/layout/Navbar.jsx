import React from "react";

import CartWidget from "../common/CartWidget";
import { Link, } from "react-router-dom";
import "./Navbar.css"; // Importa el archivo CSS

export const Navbar = () => {
  return (
  <>
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="https://res.cloudinary.com/doackpmhu/image/upload/v1710820130/Logoo-removebg-preview_q4kzcu.png" alt="" className="navbar-image" />
        </div>
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
        <Link to="/cart" className="navbar-cart">
          <CartWidget />
        </Link>
      </div>
    </div>
      
      </>
      );
    };
