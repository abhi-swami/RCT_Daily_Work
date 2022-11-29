import "./styles.css";
import React from "react";
// import Counter from "./Components/Counter";
// import Example from "./Components/Example";
import Todo from "./Components/Todo";

// export default function App() {
//   const [showCounter, setShowCounter] = React.useState(0);
//   return (
//     <div className="App">
//       {showCounter && <Counter />}
//       <br />
//       <button onClick={() => setShowCounter(!showCounter)}>show</button>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="App">
//       <Example />
//     </div>
//   );

export default function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}
