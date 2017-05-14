import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Blog from '../components/blog/Blog.jsx';
import Index from '../components/blog/Index.jsx';
import Post from '../components/blog/Post.jsx';

export default (
  <Route path="/blog" component={ Blog }>
    <IndexRoute component={ Index } />
    <Route path="/blog/:post_id" component={ Post } />
  </Route>
);
