
// import { Navbar } from "./components/layout/Navbar";
// import { ItemListContainer } from "./components/pages/ItemListContainer";
// import { Cart } from "./components/common/Cart"; 
// import { ItemDetailContainer } from "./components/pages/ItemDetailContainer";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<ItemListContainer/>} />
//         <Route path="/categoria/:categoria" element={<ItemListContainer />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/item/:id" element={<ItemDetailContainer/>} />
//       </Routes>
//     </Router>
//   );
// }


// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter y otras utilidades de react-router-dom
import { Navbar } from './components/layout/Navbar';
import { ItemListContainer } from './components/pages/ItemListContainer';
import { Cart } from './components/common/Cart';
import { ItemDetailContainer } from './components/pages/ItemDetailContainer';

function App() {
  return (
    <Router> {/* Usa el componente Router para envolver tus rutas */}
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;


