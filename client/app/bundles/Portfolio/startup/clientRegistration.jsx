import ReactOnRails from 'react-on-rails';

import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Blog from './ClientRouter';
import Clock from '../components/Clock';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Portfolio,
  Contact,
  Blog,
  Clock,
});
