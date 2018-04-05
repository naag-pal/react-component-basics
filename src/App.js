import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.yourName = "Naag";
    this.state = {};
  }

  sayHello(name){
    this.yourName = "Naag1";
    return "Hello " + name;
  }

  render() {
    const myName = "Naag Pal";
    const helloName = this.sayHello("Nagendra");
    return (
      <div className="App">
        <p>Just some sample data <b>yourName</b>: { this.yourName}</p>
        <p>Just some sample data <b>myName</b>: { myName}</p>
        <p>Just some sample data  <b>helloName</b>: { helloName}</p>
      </div>
    );
  }
}

export default App;
