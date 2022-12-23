import { useState } from "react";
export default function AddTodo({handleAddTodo}){
    const[text,setText]=useState("");
    const handleChange=(e)=>{
        setText(e.target.value)
    };
    const handleClick=()=>{
        handleAddTodo(text)
        setText("")
    }
    return(
        <>
        <input type="text" value={text}  placeholder="Add to do" onChange={handleChange}/>
                <button onClick={handleClick}>Add</button>
                <p>{text}</p>
        </>
    )
}