import React from "react";

export default function Counter(){
    const [count,setCount]=React.useState(0);
    const handleCount=(x)=>{
        setCount(x)
    }
    return(
        <>
        <h1>Count:{count}</h1>
        <button disabled={count>=25?true:false}  onClick={()=>handleCount(count+3)}>INCREASE</button>
        <button disabled={count===0?true:false}  onClick={()=>handleCount(count-2)}>DECREASE</button>
        <button disabled={count<=0?true:false} onClick={()=>handleCount(count-count)}>RESET</button>
        </>
    )
}