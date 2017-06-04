import React from 'react';
import { match, RouterContext, Route, IndexRoute  } from 'react-router';
import { validatePost, redirectError } from '../utils';

import Blog from '../components/blog/Blog.jsx';
import Index from '../components/blog/Index.jsx';
import Post from '../components/blog/Post.jsx';

export default (props, railsContext) => {
  let error;
  let redirectLocation;
  let routeProps;
  const { location } = railsContext;

  const routes = (
    <Route path='/blog' component={ Blog } posts={ props.posts }>
      <IndexRoute component={ Index } />
      <Route path='/blog/:postId' component={ Post } onEnter={ validatePost.bind({ posts: props.posts }) } />
      <Route path='/blog/:postId/*' component={ Index } onEnter={ redirectError } />
    </Route>
  );

  match({ routes, location }, (_error, _redirectLocation, _routeProps) => {
    error = _error;
    redirectLocation = _redirectLocation;
    routeProps = _routeProps;
  });
  console.log(error, redirectLocation);

  if (error || redirectLocation) {
    return { error, redirectLocation };
  }

  return <RouterContext { ...routeProps } />;
}
