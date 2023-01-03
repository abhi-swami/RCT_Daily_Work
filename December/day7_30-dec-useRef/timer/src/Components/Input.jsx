import {useState, useRef } from "react"

export default function Input(){
    const [InputVal,setInputVal]=useState("")
    const ref=useRef(null);
    const handleAdd=()=>{
        ref.current.focus();
    }
    console.log(ref.current)
    return(
        <>
        <input ref={ref} type="text" placeholder="Add a todo" value={InputVal} onChange={(e)=>setInputVal(e.target.value)} />
        <button onClick={handleAdd}>Add Todo</button>
        </>
    )
}