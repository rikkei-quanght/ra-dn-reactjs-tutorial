import React from "react";
import './App.css';
import MyComponent from './MyComponent';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyComponent studentName="Thái"></MyComponent>
        <MyComponent studentName="Tín"/>
      </div>
    );
  }
}

export default App;
