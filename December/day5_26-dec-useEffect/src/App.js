import "./styles.css";
import React from "react";
import Counter from "./Components/Counter";
// import Example from "./Components/Example";
// import Todo from "./Components/Todo";

export default function App() {
  const [showCounter, setShowCounter] = React.useState(false);
  return (
    <div className="App">
      {showCounter && <Counter />}
      <br />
      <button onClick={() => setShowCounter(!showCounter)}>{showCounter?"hide counter":"show counter"}</button>
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
