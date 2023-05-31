import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { number: 0 };
  }

  increaseNumber() {
    this.setState({
      number: this.state.number + 1
    });
  }

  render() {
    return (
      <div>
        <p>Number: {this.state.number}</p>
        <button onClick={() => this.increaseNumber()}>Tăng lên 1</button>
      </div>
    );
  }
}

export default App;
