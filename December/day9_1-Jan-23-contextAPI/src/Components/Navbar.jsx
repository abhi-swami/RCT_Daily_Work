import { useContext } from "react"
import {CartContext} from "../contexts/CartContext"

export default function Navbar(){
    const {cartCount}=useContext(CartContext)
    return(
        <>
        Cart:{cartCount}
        </>
    )
}