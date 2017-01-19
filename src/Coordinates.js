//child function of Dopefish; should handle x/y coord targeting and motion, specifically updating parent state
import React,  { Component } from 'react';
import imgLeft from './img/swimfish.gif';
import imgRight from './img/swimfish2.gif';
import imgBurp from './img/burpfish.gif';

export class Coordinates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posX: this.getRandomIntInclusive(0,90),
      posY: this.getRandomIntInclusive(0,90),
      targetX: this.getRandomIntInclusive(0,90),
      targetY: this.getRandomIntInclusive(0,90),
      increment: 0.25,
      imgUrl: imgBurp,
    };
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } //must return whole integer to work properly with increment logic

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
      <img src={this.state.imgUrl} alt="A swimming fish" style={{top: this.state.posY + '%', left: this.state.posX + '%'}} />
    )
  }
}

export class Coordinates;
