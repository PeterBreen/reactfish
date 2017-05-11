/*
this is the parent component for any instance of a Dopefish, such that App.js could just call it repeatedly for multiple fish at once. Specifically, it contains state for a fish: what coordinates (which determines location on page) and what direction it is 'swimming' (which determines image to display) as well as a click handler for the  burp interact.
*/

import React, { Component } from 'react';
import imgLeft from './img/swimfish.gif';
import imgRight from './img/swimfish2.gif';
import imgBurp from './img/burpfish.gif';
import _ from 'lodash';

class Dopefish extends Component {
  constructor(props) {
     super(props);
    //  this.handleClick = this.handleClick.bind(this);
     this.handleClick = _.debounce(this.handleClick.bind(this),6000, { 'leading': true }); //binds, then debounces for duration of animation.
     this.state = {
       posX: this.getRandomIntInclusive(0,90),
       posY: this.getRandomIntInclusive(0,90),
       targetX: this.getRandomIntInclusive(0,90),
       targetY: this.getRandomIntInclusive(0,90),
       increment: 0.25, //while using percent in positioning the element, increment must be able to add to exactly 1 - 0.25 or 0.5 work, 0.4 does not.
       imgUrl: imgBurp,
     };
   }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } //must return whole integer to work properly

  handleClick() {
    clearInterval(this.timerID);
    this.setState({
      imgUrl: imgBurp
    });
    setTimeout(() => {
      this.setMoveInterval(50);
    }, 6000);
  }

  setMoveInterval(interval) {
    this.timerID = setInterval(
    () => this.tick(), interval
    );
  }

   componentDidMount() {
     this.setMoveInterval(50);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.posX < this.state.targetX) {
    this.setState((prevState) => ({
      posX: prevState.posX + prevState.increment,
      imgUrl: imgRight
    })
    )} else if (this.state.posX > this.state.targetX) {
      this.setState((prevState) => ({
        posX: prevState.posX - prevState.increment,
        imgUrl: imgLeft
      })
    )} else {
      this.setState((prevState) => ({
        targetX: this.getRandomIntInclusive(0,90)
      })
    )}

    if (this.state.posY < this.state.targetY) {
      this.setState((prevState) => ({
        posY: prevState.posY + prevState.increment,
      })
    )} else if (this.state.posY > this.state.targetY) {
      this.setState((prevState) => ({
        posY: prevState.posY - prevState.increment,
      })
    )} else {
      this.setState((prevState) => ({
        targetY: this.getRandomIntInclusive(0,90)
      })
    )}
  }

  render() {
    return (
      <img src={this.state.imgUrl} alt="A swimming fish" onClick={this.handleClick} style={{top: this.state.posY + '%', left: this.state.posX + '%'}}/>
    );
  }
}

export default Dopefish;
