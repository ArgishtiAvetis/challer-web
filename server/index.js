import express from 'express';
import React from 'react';
import { renderToString as render } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import morgan from 'morgan';
import axios from 'axios';
import path from 'path';
import bodyParser from 'body-parser';

// Import Main React Component
import App from '../front-end/components/App.js';

// initialize Express APP
const app = express();

// Middlewares
app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

// React APP
app.get(['/', '/account'], (req, res) => {

	const context = {title: "The Title"};
	
	axios.get(`http:\/\/localhost:8080/challenges`)
		.then(resp => {
			// Server-side rendering the main React component (<App />)
			var posts = resp.data;

			const page = render(
				<StaticRouter location={req.url} context={context} >
					<App initialPosts={posts} />
				</StaticRouter>
			);

			res.send(
			`<!DOCTYPE html>
			<html>
			<head>
				<title>App</title>
				<script>
				window.DATA = ${JSON.stringify(posts)};
				</script>
			</head>
			<body>
				<div id="root">${page}</div>
				<script src="/js/bundle.js"></script>
			</body>
			</html>
				`
			);
		}).catch((err) => {
			res.send(`An error occured: ${err}`);
		});
});

app.get('/c/:slug', (req, res) => {

	const context = {title: "The Title"};
	
	axios.get(`http:\/\/localhost:8080/challenge/${req.params.slug}`)
		.then(resp => {
			// Server-side rendering the main React component (<App />)
			var post = resp.data;

			const page = render(
				<StaticRouter location={req.url} context={context} >
					<App initialPost={post} />
				</StaticRouter>
			);

			res.send(
			`<!DOCTYPE html>
			<html>
			<head>
				<title>App</title>
				<script>
				window.SINGLE = ${JSON.stringify(post)};
				</script>
			</head>
			<body>
				<div id="root">${page}</div>
				<script src="/js/bundle.js"></script>
			</body>
			</html>
				`
			);
		}).catch((err) => {
			res.send(`An error occured: ${err}`);
		});
});

app.listen(5000, () => console.log('oki'));