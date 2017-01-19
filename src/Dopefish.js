/*
this is the parent component for any instance of a Dopefish, such that App.js could just call it repeatedly for multiple fish at once. Specifically, it contains state for a fish: what coordinates (which determines location on page) and what direction it is 'swimming' (which determines image to display) as well as a click handler for the  burp interact.
*/

import React, { Component } from 'react';
import Coordinates, { tick } from './Coordinates.js';
import imgBurp from './img/burpfish.gif';


class Dopefish extends Component {

  constructor(props) {
     super(props);
     this.handleClick = this.handleClick.bind(this);
     this.state = {
       increment: 0.25, //while using percent in positioning the element, increment must be able to add to exactly 1 - 0.25 or 0.5 work, 0.4 does not.
       imgUrl: imgBurp,
     };
   }

  handleClick(e) {
    e.preventDefault();
    clearInterval(this.timerID);
    this.setState({ imgUrl: imgBurp });
    setTimeout(() => {
      this.setMoveInterval(50);
    }, 6000);
  }

  setMoveInterval(interval) {
    this.timerID = setInterval(
    () => Coordinates.tick(), interval //function is stuck in this.hell
    );
  }

   componentDidMount() {
     this.setMoveInterval(50);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <Coordinates onClick={this.handleClick} tick={this.tick} />
  }
}


export default Dopefish;
