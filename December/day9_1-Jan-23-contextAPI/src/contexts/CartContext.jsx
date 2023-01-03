import { useState,createContext } from "react";

//context api is not a state management-->so to update the  cart value for this case we are going to use useState to update the value of cart



export const CartContext=createContext();

const CartContextProvider=({children})=>{
    const[cartCount,setCartCount]=useState(0)

    const handleCartCount=(val)=>{
        setCartCount(cartCount+val)
    }


    return(
        <CartContext.Provider value={{cartCount,handleCartCount}}>

            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;