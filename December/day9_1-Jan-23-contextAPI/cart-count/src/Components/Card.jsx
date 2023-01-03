
import { useContext } from "react"
import { CartContext } from "../context/CartContex"

export default function Card(){
    const {handleCartCount}=useContext(CartContext)
    return(
        <div>
            <button onClick={()=>handleCartCount(1)}>Buy now</button>
        </div>
    )
}