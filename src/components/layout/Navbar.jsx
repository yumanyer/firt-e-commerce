import React from "react";
import CartWidget from "../common/CartWidget";
import { Conter } from "../common/Conter"; // Importar Conter como una exportación nombrada

export const pochoclo = () => {
  // Exportación nombrada
};

export const Navbar = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>Home</li>
          <li>hambrugesa nuevas</li>
          <li>Las mas pedidas</li>
          <li>Carta</li>
        </ul> {/* Cierre de la etiqueta ul movido aquí */}
        <div>
          <img src="" alt="" />
        </div>
        <CartWidget />
        <Conter /> {/* Uso de Conter como componente importado */}
      </div>
    </nav>
  );
};
