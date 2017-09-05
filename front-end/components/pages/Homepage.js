import React, { Component } from 'react';

// import template Partials
import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';

export default class Homepage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			posts: props.posts
		}
	}

	render() {
		return(
			<div>
				<Navbar />

				<div id="main">
					<h1>Welcome to Challer.</h1>
					<ul>
						{this.state.posts.map((item, i) => (
							<li key={i}><a href={`/c/${item.slug}`}>{item.title}</a></li>
						))}
					</ul>
				</div>

				<Footer />
			</div>
		)
	}
}