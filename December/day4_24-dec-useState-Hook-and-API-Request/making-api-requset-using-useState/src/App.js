// import { useState } from 'react';
import './App.css';
import Post from './Components/Post';
//making a network request(GET request )

function App() {
  // const[amount,setAmount]=useState(0);
  
  // const handleDeposite=()=>{
  //   setAmount(amount+100)
  //   console.log(`amount is ${amount+100}`)
  // }
  // const handleWithdraw=()=>{
  //   setAmount(amount-100)
  //   console.log(`amount is ${amount+100}`)
  // }
  return (
    <div className="App">
      <Post/>

    </div>
  );
}

export default App;
