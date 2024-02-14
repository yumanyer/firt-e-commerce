// exportacion por defecto
// import pochcolo from "./components/layout/Navbar"

import { Navbar } from "./components/layout/Navbar";
import { ItemListContainer } from "./components/pages/ItemListConatainer/ItemListContainer";
function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
