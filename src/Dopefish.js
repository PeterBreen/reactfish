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
     this.handleFishClick = _.debounce(this.handleFishClick.bind(this),6000, { 'leading': true }); //binds, then debounces for duration of animation.
     this.state = {
       posX: this.getRandomIntInclusive(0, this.props.windowWidth),
       posY: this.getRandomIntInclusive(0, this.props.windowHeight),
       targetX: this.getRandomIntInclusive(0, this.props.windowWidth),
       targetY: this.getRandomIntInclusive(0, this.props.windowHeight),
       imgUrl: imgBurp,
     };
   }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } //math function from MDN - must return whole integer to work properly in this app

  handleFishClick() {
    clearInterval(this.timerID);
    this.setState({
      imgUrl: imgBurp
    });
    setTimeout(() => {
      this.setMoveInterval(20);
    }, 6000);
  }

  setMoveInterval(interval) {
    this.timerID = setInterval(
    () => this.tick(), interval
    );
  }

   componentDidMount() {
     this.setMoveInterval(20);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.posX < this.state.targetX) {
    this.setState((prevState) => ({
      posX: prevState.posX + 1,
      imgUrl: imgRight
    })
    )} else if (this.state.posX > this.state.targetX) {
      this.setState((prevState) => ({
        posX: prevState.posX - 1,
        imgUrl: imgLeft
      })
    )} else {
      this.setState((prevState) => ({
        targetX: this.getRandomIntInclusive(0,this.props.windowWidth)
      })
    )}

    if (this.state.posY < this.state.targetY) {
      this.setState((prevState) => ({
        posY: prevState.posY + 1,
      })
    )} else if (this.state.posY > this.state.targetY) {
      this.setState((prevState) => ({
        posY: prevState.posY - 1,
      })
    )} else {
      this.setState((prevState) => ({
        targetY: this.getRandomIntInclusive(0,this.props.windowHeight)
      })
    )}
  }

  render() {
    return (
      <img src={this.state.imgUrl} alt="A swimming fish" onClick={this.handleFishClick} style={{top: this.state.posY + 'px', left: this.state.posX + 'px'}}/>
    );
  }
}

export default Dopefish;
