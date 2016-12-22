//child function of Dopefish; should handle x/y coord targeting and motion, specifically recieving state from parent, updating posX/posY with tick() function abstracted from Dopefish and turned stateless here....right?
import { Component } from 'react';

export class Coordinates extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      console.log(this.props)
    )
  }
}
