import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bot from './components/bot'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Bunnings</h1>
        </header>
       <Bot />
      </div>
    );
  }
}

export default App;
