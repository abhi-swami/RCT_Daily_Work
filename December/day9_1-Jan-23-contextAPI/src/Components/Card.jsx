import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"


export default function Card(){
    const {handleCartCount}=useContext(CartContext)
    return(
        <>
        <button onClick={()=>handleCartCount(1)}>Buy Now</button>
        </>
    )
}