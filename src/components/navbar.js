import React from 'react';
import {Link} from 'react-router-dom';

import './navbar.css'

export default class Navbar extends React.Component {
	render () {
		return (
				<div className="navbar">
					<nav>
						<ul>
							<li><Link to="/dashboard">Dash</Link></li>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/signin">SignIn</Link></li>
							<li><Link to="/signup">SignUp</Link></li>	
						</ul>
						
					</nav>					
				</div>
			);
	}
}