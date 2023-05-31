import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { studentName: 'Phương' };

    this.changeStudentName = this.changeStudentName.bind(this);
  }

  changeStudentName() {
    this.setState({ studentName: 'Sáng' });
  }

  render() {
    return (
      <div>
        Student name: {this.state.studentName}
        <button onClick={this.changeStudentName}>Change student name</button>
      </div>
    );
  }
}

export default App;
