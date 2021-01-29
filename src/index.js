import React from 'react';
import ReactDOM from 'react-dom';
import { Message } from "./Container/Message";
import { NavBar } from './navbar';

ReactDOM.render(
  <div>
    <NavBar />
    <Message />
  </div>, 
	document.getElementById('root')
);