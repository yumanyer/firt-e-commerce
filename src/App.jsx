// exportacion por defecto
// import pochcolo from "./components/layout/Navbar"
import { useState } from "react"
import { Conter } from "./components/common/Conter"
import {Navbar} from "./components/layout/Navbar"
import { ItemListContainer } from "./components/pages/ItemListContainer"
function App() {

  const [darkMode,setDarkMode]= useState(false)


  const cambiarModo = () => {
    setDarkMode(!darkMode)
  }

  return (
  <div>
    <button onClick={cambiarModo}>De modo claro a modo oscuro</button>
  {/* <Navbar />
  <ItemListContainer/> */}
  <Conter/>

  </div>

)
}

export default App
