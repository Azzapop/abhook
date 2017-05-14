import React from 'react';
import { match, RouterContext  } from 'react-router';

import routes from '../routes/routes.jsx';

export default (_props, railsContext) => {
  let error;
  let redirectLocation;
  let routeProps;
  const { location } = railsContext;

  match({ routes, location }, (_error, _redirectLocation, _routeProps) => {
    error = _error;
    redirectLocation = _redirectLocation;
    routeProps = _routeProps;
  });

  if (error || redirectLocation) {
    return { error, redirectLocation };
  }

  return <RouterContext { ...routeProps } />;
}
