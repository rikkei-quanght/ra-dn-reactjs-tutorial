import React from 'react'

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Sơn'}
    console.log('child constructor đã chạy')
  }

  componentWillMount() {
    console.log('child componentWillMount đã chạy')
  }

  handleChangeState = () => {
    this.setState({
        name: 'Tín'
    });
  }

  render() {
    console.log(this.state.name)
    console.log(this.state.name)
    console.log('child render đã chạy')
    return (
        <div>
            <hr/>
            <h3>Child component</h3>
            <p>Name: {this.state.name}</p>
            <p>Age: {this.props.age}</p>
            <button onClick={this.handleChangeState}>Change state</button>
        </div>
    );
  }

  componentDidMount() {
    console.log('child componentDidMount đã chạy')
  }

  componentWillReceiveProps() {
    console.log(this.props.age)
    console.log('child componentWillReceiveProps đã chạy')
  }

  shouldComponentUpdate() {
    console.log(this.state.name)
    console.log(this.props.age)
    console.log('child shouldComponentUpdate đã chạy')
    return true;
  }

  componentWillUpdate() {
    console.log(this.state.name)
    console.log(this.props.age)
    console.log('child componentWillUpdate đã chạy')
  }

  componentDidUpdate() {
    console.log(this.state.name)
    console.log(this.props.age)
    console.log('child componentDidUpdate đã chạy')
  }

  componentWillUnmount() {
    console.warn('child componentWillUnmount đã chạy')
  }
}

export default Child;
