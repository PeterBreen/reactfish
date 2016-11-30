//child function - returns random number between 0-100 for coordinates on page (x/y as expressed in top/left CSS style
//math function from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
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
