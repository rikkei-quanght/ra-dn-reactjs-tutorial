import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [number, setNumber] = useState(2);

  const handleRandomButton = () => {
    setNumber(Math.floor(Math.random() * 10))
  }

  return (
    <div className="App">
      <h1>Random number</h1>
      <p>Number: {number}</p>
      <button onClick={handleRandomButton}>Random</button>
    </div>
  );
}

export default App;
