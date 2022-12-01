/*
import React  from "react";
const Timer=()=>{
    const[count,setCount]=React.useState(10);
    React.useEffect(()=>{
        setInterval(()=>{
            console.log("setcount is called at",  Date.now())
            setCount(count-1);
        },1000)
    },[])
    return(
        <div>
        <h3>Count:{count}</h3>
        </div> 
    )
}
export default Timer;

here in above when we will see the console of our browser then we will see that "setcount is called at..." is printed after every one second but our value of count is not  descreasing although we are decreasing the value of our count but still it is not updating the value of count 
---> this is happening because of the stale state/stale clouser which is form betwen cb function of useEffect and setCount(which is it self a call back function)
to over come the above problem we use two approaches 
1. calling an call back function inside the setCount function
2.using a return call back fucntion for useEffect

Method-1.-->
import React  from "react";
const Timer=()=>{
    const[count,setCount]=React.useState(10);
    React.useEffect(()=>{
        setInterval(()=>{
            setCount((perValue)=>(perValue-1));
            console.log("setcount is called at",  Date.now())
        },1000)
    },[])
    return(
        <div>
        <h3>Count:{count}</h3>
        </div> 
    )
}
export default Timer;
but here we will face some problem that the value of count will go in negative also--> to stop that thing we can do the following things

import React  from "react";
const Timer=()=>{
    const[count,setCount]=React.useState(10);
    React.useEffect(()=>{
        setInterval(()=>{
            const id=setCount((preValue)=>{
                if(preValue===0){
                    clearInterval(id);
                    return preValue;
                }
                return  preValue-1;
            })
            console.log("setcount is called at",  Date.now())
        },1000)
    },[])
    return(
        <div>
        <h3>Count:{count}</h3>
        </div> 
    )
}
export default Timer;

In above example couter will stop at zero but still "setcount is called ..." statement is visibile at the console of the browser this showing because as soon as the use of setInterval is over, useEffects work is also over but in above eg even after the work of useEffect is done, it is stil mounted on the UI --->so it wil call the console statement agin and again --->and this process consumes extra memory and this concept is know the memory leakage concept 
To over come this problem should terminate the useEffect function( ie unmount the useEffect from the UI)-->this can be done in following ways

import React  from "react";
const Timer=()=>{
    const[count,setCount]=React.useState(10);
    React.useEffect(()=>{
        const id=setInterval(()=>{
            const id=setCount((preValue)=>{
                if(preValue===0){
                    clearInterval(id);
                    return preValue;
                }
                return  preValue-1;
            })
            console.log("setcount is called at",  Date.now())
        },1000)
        return()=>{
            clearInterval(id)
        }
    },[])
    return(
        <div>
        <h3>Count:{count}</h3>
        </div> 
    )
}
export default Timer;

with the above written code whenever we call the useEffect function  then what useEffect will do is that first of all it wil call the return function (which will clear the previous operation present with the useEffect ) and then it will execute the code written above the return call back function

*/

import React  from "react";
const Timer=()=>{
    const[count,setCount]=React.useState(10);
    React.useEffect(()=>{
        const id=setInterval(()=>{
            const id=setCount((preValue)=>{
                if(preValue===0){
                    clearInterval(id);
                    return preValue;
                }
                return  preValue-1;
            }) 
            console.log("setcount is called at",  Date.now())
        },1000)
        return()=>{
            clearInterval(id)
        }
    },[])
    return(
        <div>
        <h3>Count:{count}</h3>
        </div> 
    )
}
export default Timer;