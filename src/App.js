import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { text: 'Hello', age: 29 }
  }

  handleClick03() {
    const {text, age} = this.state;
    alert(text + ' ' + age);
  }

  handleClick(value) {
    alert(value);
  }

  render() {
    return (
      <div>
        <h1>Vi du Event</h1>

        <button onClick={() => this.handleClick('Button 01 clicked')}>Button 01</button>
        <button onClick={() => this.handleClick('Button 02 clicked')}>Button 02</button>
        <button onClick={() => this.handleClick03()}>Button 03</button>
      </div>
    );
  }
}

export default App;