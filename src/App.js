import React, { Component } from 'react';
import Dopefish from './Dopefish.js';

class App extends Component {
  // get viewport width/height dimensions, will handle resizing, from http://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
    this.updateFishtankDimensions = this.updateFishtankDimensions.bind(this);
    //
  }

  componentDidMount() {
    this.updateFishtankDimensions();
    window.addEventListener('resize', this.updateFishtankDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateFishtankDimensions);
  }

  updateFishtankDimensions() {
      this.setState({ width: this.refs.fishtank.clientWidth, height: this.refs.fishtank.clientHeight });
  }

  render() {
    return (
      <div className="fishtank" ref="fishtank">
        <Dopefish width={this.state.width} height={this.state.height} />
        <Dopefish width={this.state.width} height={this.state.height} />
        <Dopefish width={this.state.width} height={this.state.height} />
      </div>
    );
  }
}

export default App;
