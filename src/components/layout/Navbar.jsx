// exportacion nombrada
// export const pochoclo = ()=>{

import CartWidget from "../common/CartWidget"
import { Conter } from "../common/Conter"

// }



export const Navbar = ()=>{
    return(
        <nav>
            <div>
                <ul>
                    <li>Home</li>
                    <li>hambrugesa nuevas</li>
                    <li>Las mas pedidas</li>
                    <li>Carta</li>
                </ul>
            <div>
                <img src="" alt="logo" />
            </div>
            
            <CartWidget />
            <Conter />
            </div>
        </nav>
    )
}

// export default pochcolo (exportacion por defecto )