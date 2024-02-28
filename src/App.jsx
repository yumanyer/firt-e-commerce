import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { ItemListContainer } from "./components/pages/ItemListContainer";
import { Cart, Item } from "./components/common";
import { ItemDetailContainer } from "./components/pages/ItemDetailContainer";

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    
    </>
  );
}

export default App;
