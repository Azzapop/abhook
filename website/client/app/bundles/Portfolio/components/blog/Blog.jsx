import React, { Component } from 'react';

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { posts } = this.props.route;
    const children = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {
        posts: posts
      });
    });

    return (
      <div>
        { children }
      </div>
    );
  }
}

export default Blog;
