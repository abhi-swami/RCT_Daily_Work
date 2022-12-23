// code for Greetings components
/*
import './App.css';
import Greetings from './Components/Greetings';
function App() {
  return (
    <div className="App">
      <Greetings/>
      <h4>It belongs to App</h4>
    </div>
  );
}
export default App;
*/


// code for Button component and Avatar Component
/*
import './App.css';
import Button from "./Components/Button"
import Avatar from './Components/Avatar';
function App() {
  return (
    <div className="App">
      <h1>Hello World </h1>
      <Avatar imgSRC="https://caravanfriends.org/wp-content/uploads/2011/01/About-Hati.gif" altName="hathiImage" name="Aashu" rounded={false}/>
      <Avatar imgSRC="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg" altName="hathiKaBhai" name="Aashu Ka Bhai" rounded={true}/>
      <Button text="I am a Button"/>
    </div>
  );
}
export default App;
*/


//usnig map function to itteratate over Avatar component
/*
import './App.css';
import Avatar from './Components/Avatar';
const Arr=[1,2,3,4,5];
const doubleArr_withLI=Arr.map((el)=><li>{el*2}</li>);
const doubleArr_withoutLI=Arr.map((el)=>el*2);

const users=[
  {
    id:1,
    avatar_url:
    "https://caravanfriends.org/wp-content/uploads/2011/01/About-Hati.gif",
    avatar_altName:"hathiImage",
    name:"Aashu",
    isRounded:false
  },
  {
    avatar_url:"https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg",
    avatar_altName:"hathiKaBhai",
    name:"Aashu Ka Bhai",
    isRounded:true
  }
]
const  userAvatar=users.map(({avatar_url,avatar_altName,name,isRounded})=>(
<Avatar imgSRC={avatar_url}  altName={avatar_altName} name={name} rounded={isRounded}/>
))

// const  userAvatar=users.map((el)=>(
//   <Avatar imgSRC={el.avatar_url}  altName={el.avatar_altName} name={el.name} rounded={el.isRounded}/>
// ))
function App() {
  return (
    <div className="App">
      <h1>Hello World </h1>
      {doubleArr_withoutLI}
      <ul>{doubleArr_withLI}</ul>
      {userAvatar}
    </div>
  );
}
export default App;
*/

//properties that can be passed as props for any component
/*
import './App.css';
import Button from "./Components/Button"

const handleClick=()=>{
  alert('hello from handle click');
}

function App() {
  return (
    <div className="App">
      <h1>Hello World </h1>
      <Button 
      text="I am a Button"//string
      number={1}//number
      bool={true}//boolean
      arr={[1, 2, 4,6,8]}//array
      obj={{butt:"button 2"}}//object
      fun={handleClick}//function(function will be passed as callback function)

      />
    </div>
  );
}
export default App;
*/


import './App.css';
import Avatar from './Components/Avatar';
const users=[
  {
    id:1,
    avatar_url:
    "https://caravanfriends.org/wp-content/uploads/2011/01/About-Hati.gif",
    avatar_altName:"hathiImage",
    name:"Aashu",
    isRounded:false
  },
  {
    id:2,
    avatar_url:"https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg",
    avatar_altName:"hathiKaBhai",
    name:"Aashu Ka Bhai",
    isRounded:true
  }
]
const  userAvatar=users.map(({id,avatar_url,avatar_altName,name,isRounded})=>(
<Avatar 
key={id}
imgSRC={avatar_url}  
altName={avatar_altName}
name={name}
rounded={isRounded}/>
))


function App() {
  return (
    <div className="App">
      <h1>Hello World </h1>
      {userAvatar}
    </div>
  );
}
export default App;
