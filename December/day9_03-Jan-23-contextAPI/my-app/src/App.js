
import './App.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Button from './Components/Button';
import LoginForm from "./Components/LoginForm";
import Status from './Components/Status'

import { ThemeContext } from "./contexts/ThemeContext"
import { useContext } from 'react';

function App() {
  const {theme}=useContext(ThemeContext)

  const styleObj1={
    background:theme==="dark"?"black":"white",
    color:theme==="dark"?"white":"black",
  }

  return (
    <div height="1000px" style={styleObj1} className="App">
      <Navbar/>
      <h1 style={styleObj1}>Theme:{theme}</h1>
      <Button/>
      <LoginForm/>
      <Status/>
      <Footer/>

    </div>
  );
}

export default App;
