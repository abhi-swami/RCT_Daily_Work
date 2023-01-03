import { createContext, useState } from "react";

export const CartContext=createContext();


const CartContextProvider=({children})=>{
    const [cartCount,setCartCount]=useState(0);
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