import React, { Component } from 'react';
import { Link } from 'react-router';

import _ from 'lodash';

class Index extends Component {
  constructor(props) {
    super(props);
    const { posts } = props;
    const sorted = _.groupBy(posts, (post) => { return post.pinned; });
    this.state = {
      pinned: sorted.true || [],
      posts: sorted.false || []
    }
  }

  render() {
    const { pinned, posts } = this.state;
    return (
      <Link to='/blog/test-post'>Go to post</Link>
    );
  }
}

export default Index;
