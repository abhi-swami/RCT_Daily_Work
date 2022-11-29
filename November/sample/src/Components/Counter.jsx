import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(10);

  React.useEffect(() => {
    const id = setInterval(() => {
      console.log("inside set interval");
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(id);
          return prev;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      console.log("cleared the previous residuals");
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <h1>counter {count}</h1>
    </>
  );
}

//if we are not using return callback function then React will call useEffect function unless and until we do not refresh the entire page

//if we use return call back function then when ever React will render the DOM and sees the useEffect function then first of all it will call the return callback function (which is written inside the useEffect function) and afterword it will render the code which is written before the return callback function
//return callback function will be called in following condition
//1. if useEffect has an empty dependency
//2. when the conponents gets unmounted
//3.if useEffect has some dependency/dependecy array like [count]--> then whenever count gets updated then firstly retrun callback function will be called then after words whatever the code written above return call back function, it will be called
