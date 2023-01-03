import{useState,useEffect,useRef} from "react";

const fixTimeString=(timeVal)=>{
    return timeVal<10?`0${timeVal}`:timeVal
}
const formatTimeToString=(time)=>{
    const sec=time%60;
    const min=Math.floor(time/60)%60;
    return min<=0 ?  `${fixTimeString(sec)} ` :  `${fixTimeString(min)} : ${fixTimeString(sec)}`
}


function Timer(){
    const[timer,setTimer]=useState(10);
    let ref=useRef(null)
    useEffect(()=>{
        const cleanUp=()=>{
            stopTimer();
        }
        return cleanUp;
    },[])
    const startTimer=()=>{
    if (ref.current!=null){
    return;
    }
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
    };
    const stopTimer=()=>{
        clearInterval(ref.current)
        ref.current=null;
    };
    const resetTimer=()=>{
        stopTimer()
        setTimer(10)
    };
    return (
        <div className="App">
            <h3>Time : {formatTimeToString(timer)}</h3>
            <button onClick={startTimer}>START</button>
            <button onClick={stopTimer}>STOP</button>
            <button onClick={resetTimer}>RESET</button>
        </div>
    );
}
export default Timer;