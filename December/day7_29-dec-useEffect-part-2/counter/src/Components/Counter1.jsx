/*
Create a timer Component
use setInterval
start the timer automatically with an interval of 1 second
use useEffect, and only apply it for mounting phase 
*/

import React from "react";
export default function Counter1() {
const [count, setCount] = React.useState(10);
React.useEffect(() => {
const id = setInterval(() => {
    if(count===0){
        clearInterval(id)
    }
    console.log("inside set interval",Date.now());
    setCount(count-1);
}, 1000);
}, );
return (
<>
    <h1>counter {count}</h1>
</>
);
}

