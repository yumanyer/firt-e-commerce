// exportacion nombrada
// export const pochoclo = ()=>{

import CartWidget from "../common/CartWidget"

// }



export const Navbar = ()=>{
    return(
        <nav>
            <div>
            <div>
                <img src="" alt="logo" />
            </div>
            
                <ul>
                    <li>news</li>
                    <li>las mas pedidas</li>
                    <li>todas</li>
                </ul>
            <CartWidget />
            </div>
        </nav>
    )
}

// export default pochcolo (exportacion por defecto )