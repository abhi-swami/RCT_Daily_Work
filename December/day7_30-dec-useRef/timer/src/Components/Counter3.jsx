import {useState,useRef} from "react";
function CounterWithuseState(){
  const [count, setCount] = useState(0);
  console.log("app re-rendering by Counter With useState",Date.now(),"and value of count  is ",count)
  return(
    <>
    <h1>Counter with useState  {count}</h1>
    <button onClick={()=>(setCount(count+1))}>Button with useState</button>
    </>
  )
}
function CounterWithuseRef(){
  const ref= useRef(0);
  const handleClick=()=>{
    ref.current=ref.current+1;
    console.log(ref)
  }
  console.log("app re-rendering by Counter With useRef",Date.now())
  return(
    <>
    <h1>Counter with useRef   {ref.current}</h1>
    <button onClick={handleClick}>Button with useRef</button>
    </>
  )

}

export default function Counter() {

  return (
    <>
    <CounterWithuseState/>
    <CounterWithuseRef/>
    </>
  );
}



