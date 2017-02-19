import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topLeftStatus: 'active',
      topRightStatus: 'active',
      bottomLeftStatus: 'active',
      bottomRightStatus: 'active',
    }
  }

  changeActive(box) {
    const state = this.state[box];
    this.setState({
      topLeftStatus: 'inactive',
      topRightStatus: 'inactive',
      bottomLeftStatus: 'inactive',
      bottomRightStatus: 'inactive',
      [box]: (state === 'enlarged' ? 'inactive' : 'enlarged'),
    });
  }

  render() {
    const { topLeftStatus, topRightStatus, bottomLeftStatus, bottomRightStatus } = this.state;
    return (
      <div>
        <div onClick={() => this.changeActive("topLeftStatus")} className={ "home-square top-left " + topLeftStatus }></div>
        <div onClick={() => this.changeActive("topRightStatus")} className={ "home-square top-right " + topRightStatus }></div>
        <div onClick={() => this.changeActive("bottomLeftStatus")} className={ "home-square bottom-left " + bottomLeftStatus }></div>
        <div onClick={() => this.changeActive("bottomRightStatus")} className={ "home-square bottom-right " + bottomRightStatus }></div>
      </div>
    );
  }
}

export default App;
