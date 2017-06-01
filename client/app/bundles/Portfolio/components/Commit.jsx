import React, { Component } from 'react';

class Commit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      commit: {}
    }
  }

  render() {
    return (
      <p>latest commit here</p>
    );
  }
}
