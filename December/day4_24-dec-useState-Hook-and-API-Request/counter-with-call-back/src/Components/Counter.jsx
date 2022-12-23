import { useState } from "react"
export default function Counter(){
    const[count,setCount]=useState(0);
    const handleIncrease=(amt)=>{
        setCount((prevCount)=>(prevCount+amt))
        setCount((prevCount)=>(prevCount+amt))
        setCount((prevCount)=>(prevCount+amt))
        setCount(count+amt)
    }
    return(
        <div>
            <h1>Currnt Count:{count}</h1>
            <button onClick={()=>handleIncrease(100)}>INCREASE</button>
            <button>DECREASE</button>
        </div>
    )
}