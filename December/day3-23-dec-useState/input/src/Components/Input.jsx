import { useState } from "react";
export default function Input(){
    const[text,setText]=useState("hello");
    const handleText=(e)=>{
        setText(e.target.value)
    }
    return(
        <>
        <input type="text"  value={text} onChange={handleText}/>
        <p>You typed :{text}</p>
        <button onClick={()=>setText("hello")}>Reset</button>
        </>
    )
}