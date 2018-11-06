import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="title">Is Today Your Birthday?</h1>
        </header>
        <main className="App-main">
          <div className="box"></div>
          <button className="yes-button">Yes</button>
          <button className="no-button">No</button>
        </main>
        <footer className="App-footer">
        Made by Grace Casale
        </footer>
      </div>
    );
  }
}

export default App;
