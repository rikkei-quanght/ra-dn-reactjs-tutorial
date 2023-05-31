import React from "react";
import Header from "./component/Header";
import ListItem from "./component/ListItem";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
      <Header/>
      <ListItem></ListItem>
      </>
    );
  }
}

export default App;
