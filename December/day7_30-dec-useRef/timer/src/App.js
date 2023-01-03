
import './App.css';
import { useState } from 'react';
import Form from "./Components/Form"
// import Counter from "./Components/Counter3"
// import Input from './Components/Input';
import Timer from './Components/Timer';



function App(){
  const [showCounter,setShowCounter]=useState(false)
  return (
    <div className="App">
      <Form/>
      {/* <Counter/> */}
      {/* <Input/> */}


      {/* {showCounter && <Timer />}
      <br />
      <button onClick={() => setShowCounter(!showCounter)}>{showCounter?"Hide Timer":"Show Timer"}</button>
      <br/>  */}
    </div>
  );
}

export default App;
