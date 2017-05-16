import React from 'react';
import { Router, browserHistory  } from 'react-router';

import routes from '../routes/routes.jsx';

export default (props, _railsContext) => {
  return (
    <Router history={ browserHistory } test={ props }>
      { routes(props) }
    </Router>
  );
}
