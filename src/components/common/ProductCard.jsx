export const ProductCard = ( {img, title, description, price} ) => {

    // const  { titulo, desc, precio } = prop

  return (
    <div style={{border: "2px solid black"}}>
      <img src={img} alt="" />
        <h1>{title}</h1>
        <h3>{description}</h3>
        <h3>{price}</h3>
    </div>
  )
}