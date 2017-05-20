import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Blog from '../components/blog/Blog.jsx';
import Index from '../components/blog/Index.jsx';
import Post from '../components/blog/Post.jsx';

export function validatePost(nextState, replace) {
  const { postId } = nextState.params;
  const post = _.find(this.posts, (p) => { return p.slug === postId });
  if (!post) replace({ pathname: '/blog', state: { redirectFrom: nextState.location.pathname, error: true } });
}

export default (props) => {
  return (
    <Route path='/blog' component={ Blog } posts={ props.posts }>
      <IndexRoute component={ Index } />
      <Route path='/blog/:postId*' component={ Post } onEnter={ validatePost.bind({ posts: props.posts }) } />
    </Route>
  );
};
