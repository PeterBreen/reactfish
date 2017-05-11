import React, { Component } from 'react';
import Dopefish from './Dopefish.js';

class App extends Component {
  // get viewport width/height dimensions, will handle resizing, from http://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
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
