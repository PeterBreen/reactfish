import React, {Component} from 'react';
import Dopefish from './Dopefish.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
      numFish: null
    };
    this.updateFishtankDimensions = this.updateFishtankDimensions.bind(this);
  }

  // get viewport width/height dimensions, will handle resizing, from http://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
  componentDidMount() {
    this.updateFishtankDimensions();
    window.addEventListener('resize', this.updateFishtankDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateFishtankDimensions);
  }

  updateFishtankDimensions() {
    this.setState({
      width: this.refs.fishtank.clientWidth,
      height: this.refs.fishtank.clientHeight,
      numFish: this.numberOfFishes(this.refs.fishtank.clientWidth)
    });
  }

  numberOfFishes(displayWidth) {
    let numFishes = Math.ceil(displayWidth / 200);
    if (numFishes < 1) {
      return 1;
    } else {
      return numFishes
    };
  }

  render() {
    const fishQty = [];

    for (var i = 0; i < this.state.numFish; i++) {
      fishQty.push(<Dopefish key={i} width={this.state.width} height={this.state.height}/>);
    };

    return (<div className="fishtank" ref="fishtank">
      {
        this.state.width && this.state.height && <div className="fishes">
            {fishQty}
          </div>
      }
    </div>);
  }
}

export default App;
