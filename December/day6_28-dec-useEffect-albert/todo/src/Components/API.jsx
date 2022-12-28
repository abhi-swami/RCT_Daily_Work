import { useEffect,useState } from "react";

export default function API(){
    const [data,setData]=useState([])
    const[loading,setLoading]=useState(false)
    const[err,setErr]=useState(false);
    const [page,setPage]=useState(1)
    const getData=(page)=>{
        return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`).then((res)=>{
            return res.json()
        })
    }
    const fetchNUpdateData=async(page)=>{
        setLoading(true)
        setErr(false)
        try{
            const posts=await getData(page);
            setData(posts);
            setLoading(false)
        }catch(err){
            setErr(true)
            setLoading(false)
            console.log("error is ",err)
        }
    }
    // console.log(data)
    useEffect(()=>{
        fetchNUpdateData(page)
    },[page])
    
    const handlePage=(val)=>{
        setPage(page+val)
    }
    if(loading){
        return <h1>Please wait we are loading your data</h1>
    }
    if(err){
        return <h1>Opps.... an error occured</h1>
    }
    return(
        <>
        {
            data.map((el)=>(
                <h4 key={el.id}><li >{el.id}     {el.title}</li></h4>
            ))
        }
        <button disabled={page<=1} onClick={()=>handlePage(-1)}>PREV</button>
        <button>{page}</button>
        <button onClick={()=>handlePage(+1)}>Next</button>
</>
    )
}
//https://jsonplaceholder.typicode.com/