import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { studentName: 'Phương' };
  }

  render() {
    return (
      <div>
        Student name: {this.state.studentName}
      </div>
    );
  }
}

export default App;
