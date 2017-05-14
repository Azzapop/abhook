import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>{ this.props.params.post_id }</p>;
  }
}

export default Post;
