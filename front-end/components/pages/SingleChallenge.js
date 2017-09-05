import React, { Component } from 'react';

// import template Partials
import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';

export default class SingleChallenge extends Component {

	constructor(props) {
		super(props);
		this.state = {
			post: props.post[0]
		}
	}

	render() {
		const post = this.state.post;
		return(
			<div>
				<Navbar />

				<div id="main">
					<h1>{post.title}</h1>
					<ul>
						{post.body}
					</ul>
				</div>

				<Footer />
			</div>
		)
	}
}