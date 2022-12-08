
import './App.css';
import {useState,useRef} from "react";


function App(){
  const[timer,setTimer]=useState(10);
  let ref=useRef(null)

  const startTimer=()=>{
    ref.current=setInterval(()=>{
          console.log("set interval got called",Date.now(),timer);
          setTimer((pervTimer)=>{
              if(pervTimer<=1){
                  clearInterval(ref.current);
                  return 0;
              }
                return pervTimer-1;
          })
      },1000);
      const cleanUpFun=()=>{
          clearInterval(ref.current);
          console.log("clear interval is called")
      }
      return cleanUpFun;
  };
const stopTimer=()=>{
  clearInterval(ref.current)
};

  return (
    <div className="App">
      <h3>Time:{timer}</h3>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
    </div>
  );
}

export default App;
