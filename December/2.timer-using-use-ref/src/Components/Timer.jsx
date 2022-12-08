import{useState,useEffect} from "react";

function Timer(){
    const[count,setCount]=useState(10);

    useEffect(()=>{
        const Id=setInterval(()=>{
            console.log("set interval got called",Date.now(),count);
            setCount((prevCount)=>{
                if(prevCount===0){
                    clearInterval(Id);
                    return prevCount;
                }
                return prevCount-1;
            },1000)
        });
        const cleanUpFun=()=>{
            clearInterval(Id);
            console.log("clear interval is called")
        }
        return cleanUpFun;
    },[]);
}
export default Timer;