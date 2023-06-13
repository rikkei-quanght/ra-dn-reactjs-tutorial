import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/todo/TodoList'

class App extends React.Component {
  render() {
    return (
      <>
        <TodoList />
      </>
    )
  }
}

export default App;
