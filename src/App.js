import React, { Component } from 'react';
import './App.css';
import Dopefish from './Dopefish.js';

class App extends Component {
  render() {
    return (
      <div className="ft-basis">
        <Dopefish />
        <Dopefish />
        <Dopefish />
      </div>
    );
  }
}

export default App;
