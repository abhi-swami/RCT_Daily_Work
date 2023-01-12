import {useState,useEffect} from "react"
import { useParams } from "react-router-dom";
export default function SingleUserPage(){
    const [data,setData]=useState({})
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)
    const {id}=useParams();
    const getData=()=>{
        return fetch(`https://reqres.in/api/users/${id}`).then((res)=>res.json())
    }
    console.log(data)
    const fetchData=()=>{
        getData()
        .then((data)=>setData(data))
        .catch((err)=>setError(true))
        .finally(()=>setLoading(false))
    }
    useEffect(()=>{
        fetchData()
    },[])

    return loading ? (<h1>....Loading</h1>):error?(<h1>opps....  an error occured</h1>):(
        <div>
        <h1>Single User Page</h1>
        <div>
            <img src={data?.data?.avatar} alt={data?.data?.name}/>
            <h5>
                Name : {data?.data?.first_name} {data?.data?.last_name}
            </h5>
            <h5>
                Email : {data?.data?.email}
            </h5>

        </div>
        </div>
    )
}



