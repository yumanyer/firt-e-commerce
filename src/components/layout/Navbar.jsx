// exportacion nombrada
// export const pochoclo = ()=>{

import CartWidget from "../common/CartWidget"

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
            </div>
        </nav>
    )
}

// export default pochcolo (exportacion por defecto )