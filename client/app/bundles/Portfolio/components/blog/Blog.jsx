import React from 'react';

const Blog = (props) => {
  const { posts } = props.route;
  const children = React.Children.map(props.children, function(child) {
    return React.cloneElement(child, {
      posts: posts
    });
  });

  return (
    <div>
      { children }
    </div>
  );
};

export default Blog;
