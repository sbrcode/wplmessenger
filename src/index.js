import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Container/AppFunction";
import { NavBar } from './navbar';

ReactDOM.render(
  <div>
    <NavBar />
    <App />
  </div>, 
	document.getElementById('root')
);