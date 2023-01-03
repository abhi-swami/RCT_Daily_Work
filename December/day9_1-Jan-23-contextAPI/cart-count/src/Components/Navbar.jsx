import { useContext } from "react";
import {CartContext} from "../context/CartContex"

export default function Navbar(){
    const{cartCount}=useContext(CartContext)
    return(
        <div>
            Count:{cartCount}
        </div>
    )
}