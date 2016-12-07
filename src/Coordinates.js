//child function of Dopefish; handles x/y coord targeting and motion
import React, { Component } from 'react';

class Coordinates extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.getRandomIntInclusive(0, 100);
  }
}

export default Coordinates;
