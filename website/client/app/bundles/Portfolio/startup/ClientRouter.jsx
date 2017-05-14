import React from 'react';
import { Router, browserHistory  } from 'react-router';

import routes from '../routes/routes.jsx';

export default (_props, _railsContext) => {
  return (
    <Router history={ browserHistory }>
      { routes }
    </Router>
  );
}
