import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { validatePost, redirectError } from '../utils';

import Blog from '../components/blog/Blog.jsx';
import Index from '../components/blog/Index.jsx';
import Post from '../components/blog/Post.jsx';

export default (props) => {
  return (
    <Route path='/blog' component={ Blog } posts={ props.posts }>
      <IndexRoute component={ Index } />
      <Route path='/blog/:postId' component={ Post } onEnter={ validatePost.bind({ posts: props.posts }) } />
      <Route path='/blog/:postId/*' component={ Index } onEnter={ redirectError } />
    </Route>
  );
};
