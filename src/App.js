import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  MusicApp from './musicApp/main';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">XRC</h1>
        </header>
        <h1>Select an exaple API</h1>
        <section>
          <MusicApp></MusicApp>
        </section>
      </div>
    );
  }
}

export default App;
