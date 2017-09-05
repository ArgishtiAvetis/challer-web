import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';

import App from './components/App';

var initialPosts = window.DATA,
	initialPost = window.SINGLE;

ReactDOM.render(
	<BrowserRouter>
		<App initialPosts={initialPosts} initialPost={initialPost} />	
	</BrowserRouter>,
	document.getElementById('root')
)