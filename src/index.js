import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppMessage } from './Container/AppMessage';
import { AppThreads } from './Container/AppThreads';

/**
 * Creates routes and links. Uses tags from react-router-dom library.
 *
 */
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">New message</Link>
            </li>
            <li>
              <Link to="/threads">List of Threads</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/threads">
            <Threads />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome and type your new message !</h2>
      <AppMessage />
    </div>
  )
}

function Threads() {
  return (
    <div>
      <AppThreads />
    </div>
  )
}

ReactDOM.render(
  <App />, 
	document.getElementById('root')
);