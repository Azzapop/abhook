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
    let topLeftContent, topRightContent, bottomLeftContent, bottomRightContent;
    if (topLeft === "off-split" || topLeft === "full-split") {
      topLeftContent = <p onClick={ () => this.enlarge("topLeft") }>Open</p>;
    } else if (topLeft === "split-full") {
      topLeftContent = <p onClick={ () => this.close() }>Close</p>;
    }
    if (topRight === "off-split" || topRight === "full-split") {
      topRightContent = <p onClick={ () => this.enlarge("topRight") }>Open</p>;
    } else if (topRight === "split-full") {
      topRightContent = <p onClick={ () => this.close() }>Close</p>;
    }
    if (bottomLeft === "off-split" || bottomLeft === "full-split") {
      bottomLeftContent = <p onClick={ () => this.enlarge("bottomLeft") }>Open</p>;
    } else if (bottomLeft === "split-full") {
      bottomLeftContent = <p onClick={ () => this.close() }>Close</p>;
    }
    if (bottomRight === "off-split" || bottomRight === "full-split") {
      bottomRightContent = <p onClick={ () => this.enlarge("bottomRight") }>Open</p>;
    } else if (bottomRight === "split-full") {
      bottomRightContent = <p onClick={ () => this.close() }>Close</p>;
    }
    return (
      <div>
        <div className={ "home-square top-left " + topLeft }>
          { topLeftContent }
        </div>
        <div className={ "home-square top-right " + topRight }>
          { topRightContent }
        </div>
        <div className={ "home-square bottom-left " + bottomLeft }>
          { bottomLeftContent }
        </div>
        <div className={ "home-square bottom-right " + bottomRight }>
          { bottomRightContent }
        </div>
      </div>
    );
  }
}

export default App;
