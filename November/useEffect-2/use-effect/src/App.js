
import './App.css';
import React  from "react";
import Timer from "./Components/Timer.jsx"

function App() {
  const[showTimer,setShowTimer]=React.useState(true);

  return (
    <div className="App">
      {/* {showTimer &&< Timer/>} */}
      < Timer/>
      <button onClick={()=>(setShowTimer(!showTimer))}>Toggle Show Timer</button>
    </div>
  );
}

export default App;
