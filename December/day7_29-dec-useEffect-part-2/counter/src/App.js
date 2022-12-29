import "./styles.css";
import React from "react";
import Counter1 from "./Components/Counter1";
import Counter2 from "./Components/Counter2";
import Counter3 from "./Components/Counter3";
import Example from "./Components/Example";
export default function App() {
  const [showCounter, setShowCounter] = React.useState(false);
  return (
    <div className="App">
      {showCounter && <Counter3 />}
      <br />
      <button onClick={() => setShowCounter(!showCounter)}>{showCounter?"hide counter":"show counter"}</button>
      <br/> 

      {/* <Example/>  */}
      {/* <Counter1/> */}
      {/* <Counter2/> */}
    </div>
  );
}






















// export default function App() {
//   return (
//     <div className="App">
//       <Example />
//     </div>
//   );

// export default function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// different pahse/behaviours for an application
//1.mounting phase-->it the phase in which a particular DOM is successfully mounted on to the UI and we can perform the task using that DOM
//2.update phase
//3.Unmounting phase
//these three above mentioned phase are called the different life cycle  phase of an App
