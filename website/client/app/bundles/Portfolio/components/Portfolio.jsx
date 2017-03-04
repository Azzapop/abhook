import React, { Component } from 'react';

import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topLeft: 'off-split',
      topRight: 'off-split',
      bottomLeft: 'off-split',
      bottomRight: 'off-split',
    }
  }

  enlarge(square) {
    const { state } = this;
    let newState = {};
    _.map(state, (v, k) => {
      if (k === square) newState[k] = "split-full";
      else newState[k] = "split-off";
    });
    this.setState(newState);
  }

  close() {
    const { state } = this;
    let newState = {};
    _.map(state, (v, k) => {
      if (v === "split-full") newState[k] = "full-split";
      else newState[k] = "off-split";
    });
    this.setState(newState);
  }

  render() {
    const { topLeft, topRight, bottomLeft, bottomRight } = this.state;
    return (
      <div>
        <div className={ "home-square top-left " + topLeft }>
          <p onClick={ () => this.enlarge("topLeft") }>Open</p>
          <p onClick={ () => this.close() }>Close</p>
        </div>
        <div className={ "home-square top-right " + topRight }>
          <p onClick={ () => this.enlarge("topRight") }>Open</p>
          <p onClick={ () => this.close() }>Close</p>
        </div>
        <div className={ "home-square bottom-left " + bottomLeft }>
          <p onClick={ () => this.enlarge("bottomLeft") }>Open</p>
          <p onClick={ () => this.close() }>Close</p>
        </div>
        <div className={ "home-square bottom-right " + bottomRight }>
          <p onClick={ () => this.enlarge("bottomRight") }>Open</p>
          <p onClick={ () => this.close() }>Close</p>
        </div>
      </div>
    );
  }
}

export default App;
