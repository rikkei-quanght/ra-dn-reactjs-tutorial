import React from "react";

class App extends React.Component {
  sum(number1, number2) {
    return number1 + number2;
  }

  render() {
    const number1 = 8;
    const number2 = 4;

    return (
      <div>
        Tổng của {number1} và {number2} là {this.sum(number1, number2)}
      </div>
    );
  }
}

export default App;
