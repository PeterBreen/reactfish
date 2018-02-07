import React, {Component} from 'react';
import Dopefish from './Dopefish.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
      numFish: 6 //this will be determined with a formula, most likely in the updateFishtankDimensions(), after proof of concept
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
    this.setState({width: this.refs.fishtank.clientWidth, height: this.refs.fishtank.clientHeight});
  }

  render() {
    const fishQty = [];

    for (var i = 0; i < this.state.numFish; i++) {
      fishQty.push(<Dopefish key={i} width={this.state.width} height={this.state.height} />);
    }; //should return 6 fish while numFish is hardcoded

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
