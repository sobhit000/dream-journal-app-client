import React from 'react';
import './pastdreams.css'

export default class PastDreams extends React.Component {
	render () {
		return (
				<div className="pastdreams">
					<section>
				        <header>
				          <h3>Dream about lorem</h3>
				          <p>January 2, 2018</p>
				        </header>    
				        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				        <button>Edit Dream</button>
				        <button>Delete Dream</button>        
				    </section>
				    <section>
				        <header>
				          <h3>Dream about ipsum</h3>
				          <p>January 1, 2018</p>
				        </header>    
				        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				        <button>Edit Dream</button>
				        <button>Delete Dream</button>        
	      			</section>
	      		</div>
			);
	}
}