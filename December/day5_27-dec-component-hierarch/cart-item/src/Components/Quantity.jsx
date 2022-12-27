export default function Quantity({id,quantity,handleChange}){
    return(
        <>
        <button onClick={()=>handleChange(id,-1)}>-</button>
        <button>{quantity}</button>
        <button onClick={()=>handleChange(id,1)}>+</button>
        </>
    )
}