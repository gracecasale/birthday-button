import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    showText: false
  };

  this.onYesSelect = this.onYesSelect.bind(this);
  this.onNoSelect = this.onNoSelect.bind(this);
}

onYesSelect(text, event) {
  this.setState({
    showText: true
  })
}

onNoSelect(text, event) {
  this.setState({
    showText: false
  })
}

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="title">Is Today Your Birthday?</h1>
        </header>
        <main className="App-main">
          <div className="box">{this.state.showText ? "Happy Birthday!" : ""}  </div>
          <div className="buttons-row">
          <button className="btn yes-button" onClick={this.onYesSelect}>Yes</button>
          <button className="btn no-button" onClick={this.onNoSelect}>No</button>
          </div>
        </main>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
