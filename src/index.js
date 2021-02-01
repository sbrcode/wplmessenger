import React from 'react';
import ReactDOM from 'react-dom';
import { AppMessage } from './Container/AppMessage';
import { NavBar } from './navbar';

ReactDOM.render(
  <div>
    <NavBar />
    <AppMessage />
  </div>, 
	document.getElementById('root')
);