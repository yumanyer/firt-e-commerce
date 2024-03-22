import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/pages/ItemListContainer";
import { ItemDetailContainer } from "./components/pages/ItemDetailContainer";
import Layout from "./components/layout/Layout";
import CheckoutContainer from "./components/pages/checkout/CheckoutContainer";
import { Cart } from "./components/pages/cart/Cart";
import CartContextProvider from "./context/CartContext"; // Cambia la importación aquí

function App() {
  return (
    <Router>
      <CartContextProvider> {/* Utiliza el componente importado */}
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Route>
        </Routes>
      </CartContextProvider>
    </Router>
  );
}

export default App;
