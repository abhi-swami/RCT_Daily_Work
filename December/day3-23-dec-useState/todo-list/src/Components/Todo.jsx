
/*
import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
export default function Todo(){
    const[todos, setTodos]=useState([]);
    const handleAddTodo=(text)=>{
        const newItem={
            title:text,
            status:false,
            id:Math.random()+text+Date.now(),
        };
        const todoListAfterAddingNewItem=[...todos,newItem];
        setTodos(todoListAfterAddingNewItem)
    };
    const handleToggle=(id)=>{
        const todosAfterUpadation=todos.map((todo)=>
        todo.id===id?{...todo,status:!todo.status}:todo);
        setTodos(todosAfterUpadation);
    }
    const handleDelete=(id)=>{
        const todosAfterDeletion=todos.filter((todo)=>
        todo.id!==id);
        setTodos(todosAfterDeletion)
    }
    console.log(todos)
    return(
        <div className="Todo">
            <div>
                <AddTodo handleAddTodo={handleAddTodo}/>
            </div>
            <div>
                {
                    todos.map(({title,status,id})=>(
                        <TodoItem id={id} title={title} status={status} handleToggle={handleToggle} handleDelete={handleDelete}/>
                    ))
                }
            </div>
        </div>
    );
};
*/
import { useState } from "react";

function AddTodo({handleAddTodo}){
    const[text,setText]=useState("")
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    return(
        <>
            <input type="text" value={text} onChange={handleChange} />
                <button onClick={()=>handleAddTodo(text)}>Add</button>
                <p>{text}</p>
        </>
        )
    }


function TodoItem({title,status,id}){
        return(
        <>
        <li>{title} - {status?"completed":"Not Completed"}</li>
        </>
    )
}


export default function Todo(){
    const[todos, setTodos]=useState([]);
    
    const handleAddTodo=(text)=>{
        const newItem={
            title:text,
            status:false,
            id:Math.random()+text+Date.now(),
        };
        const todoListAfterAddingNewItem=[...todos,newItem];
        setTodos(todoListAfterAddingNewItem)
    };
    console.log(todos)
    return(
        <div className="Todo">
            <div>
                <AddTodo  handleAddTodo={handleAddTodo}/>
            </div>
            <div>
                {
                    todos.map(({title,status,id})=>
                    <TodoItem key={id} id={id} title={title} status={status}/>
                    // <li key={id}>{title} - {status?"completed":"Not Completed"}</li>
                    )
                }
            </div>
        </div>
    );
};




















    //     const handleToggle=(id)=>{
    //     const todosAfterUpadation=todos.map((todo)=>
    //     todo.id===id?{...todo,status:!todo.status}:todo);
    //     setTodos(todosAfterUpadation);
    // }


    // const handleDelete=(id)=>{
    //     const todosAfterDeletion=todos.filter((todo)=>
    //     todo.id!==id);
    //     setTodos(todosAfterDeletion)
    // }