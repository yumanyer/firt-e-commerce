// exportacion por defecto
// import pochcolo from "./components/layout/Navbar"

import {Navbar} from "./components/layout/Navbar"
import {ItemListContainer} from "./components/pages/ItemListContainer"
function App() {
  return (
  <div>
    
  <Navbar />
  <ItemListContainer greeting="¡Bienvenido a nuestra tienda de hamburguesas!"  />
  

  </div>

)
}

export default App
