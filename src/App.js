import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  // Ví dụ axios với method GET
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response.data))

  // Ví dụ axios với method POST
  axios.post('https://jsonplaceholder.typicode.com/posts', {username: 'Nguyễn Trung Tín'})
    .then(response => console.log(response.data))
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
