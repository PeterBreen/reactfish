/*
this is the parent component for any instances of a Dopefish, such that App.js could just call it repeatedly for multiple fish at once. Specifically, it contains state for a fish: what coordinates (which determines location on page) and what direction it is 'swimming' (which determines image to display) as well as a click handler for the onClick burp interact.
*/

import React, { Component } from 'react';
import imgLeft from './img/swimfish.gif';
import imgRight from './img/swimfish2.gif';
import imgBurp from './img/burpfish.gif';

class Dopefish extends Component {
    constructor(props) {
       super(props);
       this.state = {
         posX: 50 + '%',
         posY: 25 + '%'
       };
     }

  render() {
    return (
      <img src={imgLeft} alt="A swimming fish" />
    );
  }
}

export default Dopefish;
