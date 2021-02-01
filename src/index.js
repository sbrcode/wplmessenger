import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppMessage } from './Container/AppMessage';
import { AppThreads } from './Container/AppThreads';

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
              <Link to="/threads">Threads</Link>
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
      <h3>Welcome and write your new message !</h3>
      <AppMessage />
    </div>
  )
}

function Threads() {
  return (
    <div>
    <h3>List of Threads</h3>
    <AppThreads />
    </div>
  )
}

ReactDOM.render(
  <App />, 
	document.getElementById('root')
);