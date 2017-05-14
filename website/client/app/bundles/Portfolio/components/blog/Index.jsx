import React, { Component } from 'react';
import { Link } from 'react-router';

class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link href='/blog/test-post'>Go to post</Link>
    );
  }
}

export default Index;
