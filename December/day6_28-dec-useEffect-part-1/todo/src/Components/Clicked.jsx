import { useEffect,useState } from "react";

export default function Clicked(){
    const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`You clicked ${count} timses`
    },[count])
    return(
        <>
        <h1>You clicked this button {count} times</h1>
        <button onClick={()=>setCount(count+1)}>Click me!</button>
        </>
    )
}