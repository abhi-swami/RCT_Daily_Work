import { useState } from "react";
import CartItem from "./CartItem";


const initalData = [
    { id: 1, label: "noodles", price: 90, quantity: 0 },
    { id: 2, label: "biryani", price: 180, quantity: 0 },
    { id: 3, label: "chips", price: 70, quantity: 0 }
    ];

export default function Cart(){
    const[data,setData]=useState(initalData)
    const handleChange=(id,value)=>{
        const updatedData=data.map((item)=>
            item.id===id  ? {...item,quantity:item.quantity+value}:item
        );
        setData(updatedData)
    }
    const totalPrice=data.reduce((acc,{price,quantity})=>{
        acc=acc+(price*quantity)
        return acc
    },0)
    return(
        <div>
            {
                data.map((items)=>(
                    <CartItem key={items.id} {...items} handleChange={handleChange}/>
                ))
            }
            <h1>
            total price is : {totalPrice}
            </h1>
        </div>
    )
}