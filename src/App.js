import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: ''
    }
  }

  render() {
    let datetime = new Date();

    setInterval(function() {
      datetime = new Date();
    }, 1000);

    return (
      <div>
        <h1>Đồng hồ</h1>
        {datetime.toLocaleTimeString()}
      </div>
    );
  }
}

export default App;
