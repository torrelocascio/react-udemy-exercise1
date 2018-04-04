import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './userInput/userInput'
import UserOutput from './userOutput/userOutput'

class App extends Component {
state = {
  usernameState: "supertorre"
}

inputChangeHandler = (event) => {
  this.setState({usernameState: event.target.value}) 
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <UserInput 
      currentName={this.state.usernameState} 
      changed={this.inputChangeHandler}/>
      <UserOutput username={this.state.usernameState}/>
      <UserOutput username='torrelo'/>
      <UserOutput/>
      </div>

    );
  }
}

export default App;
