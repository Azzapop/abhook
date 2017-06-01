import ReactOnRails from 'react-on-rails';

import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Blog from './ServerRouter';
import Clock from '../components/Clock';
import Commit from '../components/Commit';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Portfolio,
  Contact,
  Blog,
  Clock,
  Commit,
});
