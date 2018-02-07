import React, {Component} from 'react';
import Dopefish from './Dopefish.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
      numFish: 6
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

    let fishQty = null;
    if (this.state.width > 640) {
      fishQty = <div><Dopefish width={this.state.width} height={this.state.height}/><Dopefish width={this.state.width} height={this.state.height}/><Dopefish width={this.state.width} height={this.state.height}/><Dopefish width={this.state.width} height={this.state.height}/>
      </div>
    } else {
      fishQty = <div><Dopefish width={this.state.width} height={this.state.height}/><Dopefish width={this.state.width} height={this.state.height}/><Dopefish width={this.state.width} height={this.state.height}/></div>
    }

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
