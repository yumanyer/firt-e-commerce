import { ProductCard } from "../common/Product-Card"

export const ItemListContainer =()=>{
    return (

        <div>
            <h1>hola a todos </h1>
            <ProductCard titulo = {"la simplona"} desc= {"1 feta de carne y cheddar"} precio = {"$5000"} />
            <ProductCard titulo = {"la prohibida"} desc= {"carne,panceta,cheddar,bqb"} precio = {"$6000"} />
            <ProductCard titulo = {"la champion"} desc= {"4 quesos,championioines,carne,mostaza dulce"} precio = {"$7500"} />
        </div>
    
    )
}

