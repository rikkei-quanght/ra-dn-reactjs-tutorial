import React from 'react'
import Child from './Child'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { age: 26, isShowChild: true }
    console.log('app constructor')
    this.handleChangeAge = this.handleChangeAge.bind(this)
  }

  componentWillMount() {
    console.log('app componentWillMount')
  }

  handleChangeAge() {
    this.setState({
      age: 29
    });
  }

  toogleShowChild() {
    console.log('toogleShowChild')
    this.setState({
      isShowChild: !this.state.isShowChild
    })
  }

  render() {
    console.log('app render')
    return (
      <>
        <h1>App component</h1>
        <button onClick={this.handleChangeAge}>Change age</button>
        <button onClick={this.toogleShowChild.bind(this)}>Toggle show child</button>
        {this.state.isShowChild ? <Child age={this.state.age}/> : null}
      </>
    );
  }

  componentDidMount() {
    console.log('app componentDidMount')
  }
}

export default App;
