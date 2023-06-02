import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: new Date(),
      intervalId: null,
    }
  }

  render() {
    return (
      <div>
        <h1>Đồng hồ</h1>
        {this.state.currentTime.toLocaleTimeString()}
      </div>
    );
  }

  tick = () => {
    this.setState({ currentTime: new Date() })
  }

  componentDidMount() {
    let intervalId = setInterval(this.tick, 1000);
    this.setState({ intervalId: intervalId })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
}

export default App;
