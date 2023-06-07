import logo from './logo.svg';
import './App.css';
import {Button as BootstrapButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <BootstrapButton variant="secondary">Button React-boostrap</BootstrapButton>
      <button>Button HTML</button>
    </div>
  );
}

export default App;
