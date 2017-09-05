import React, { Component } from 'react';

export default class Navbar extends Component {
	render() {
		return(
			<div>
				<div>
					<h1>Navbar</h1>
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="/account">Account</a></li>
					</ul>
					<hr />
				</div>
			</div>
		)
	}
}