export default function TodoItem({id,title,status,handleToggle,handleDelete}){
    return(
        <>
        <li >
            {title} - {status?"Completed":"Not completed"}
            <button onClick={()=>handleToggle(id)}>Toggle</button>
            <button onClick={()=>handleDelete(id)}>delete</button>
            </li>
        </>
    )
}