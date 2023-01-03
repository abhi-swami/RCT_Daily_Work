export default function Products({title,price,image}){
    return(
        <div style={{border:"1px solid grey"}}>
            <img style={{width:"40%",height:"20vh"}} src={image} alt={title} />
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
    )
}