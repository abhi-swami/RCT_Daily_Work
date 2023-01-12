
import './App.css';
import Form from './Components/Form';
import LoginForm from './Components/LoginForm';
import Status from './Components/Status';

function App() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("trying to submit");
  };
  return (
    <div className="App">
      <h1>Containtment</h1>
      <LoginForm/>
      <Status/>
    </div>
  );
}

export default App;
