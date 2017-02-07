/*
this is the parent component for any instance of a Dopefish, such that App.js could just call it repeatedly for multiple fish at once. Specifically, it contains state for a fish: what coordinates (which determines location on page) and what direction it is 'swimming' (which determines image to display) as well as a click handler for the  burp interact.
*/

import React, { Component } from 'react';
import { Coordinates } from './Coordinates.js';
import imgBurp from './img/burpfish.gif';


class Dopefish extends Component {

  constructor(props) {
     super(props);
     this.handleClick = this.handleClick.bind(this);
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
      () => this.tick(), interval
      );
    } // still not sure about this situation, see also render line

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


export default Dopefish
