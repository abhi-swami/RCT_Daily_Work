import { useState } from "react"
import {PostIem} from "./PostItems"

export default function Post(){
    const [posts,setPosts]=useState([]);
    // const getData=()=>{
    //     return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    //     .then((res)=>(res.json()));
    // }
    const getData=async()=>{
        try{
            let res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
            res=res.json();
            return res;
        }catch(err){
            console.log("error during fecting is ", err)
        }
    }

    const fetchAndUpdate=async()=>{
        try{
            const data=await getData();
            // console.log(data);
            setPosts(data);

        }catch(err){
            console.log("errror is ",err)
        }
    }
    return(
        <>
            <h1>Posts</h1>
            <button onClick={fetchAndUpdate}>Get Posts</button>
            <ul>
                {
                    posts.map(({id,title})=><PostIem key={id} title={title}/>)
                }
            </ul>
        </>
    )
}