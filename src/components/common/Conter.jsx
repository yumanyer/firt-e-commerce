// cada vez que nuestro componente cambia o se ve afectado
// este se vuelve a leer y se ve siendo renderizado/actualizado

import { useState } from "react"


export const Conter = () => {

    const [counter,funcionCounter] = useState(0) //desestructuramos la funcion
    console.log(counter)

  //  console.log(x[0])  [variable,funcion]
    // let counter= 0

    const sumar = () =>{
        funcionCounter(counter + 1)
    }
    const restar = () =>{

    }
return (
    <div>
         <button onClick={sumar}>sumar</button>
        <h4>{counter}</h4>
        <button onClick={restar}>restar</button> 
    </div>
)
}

