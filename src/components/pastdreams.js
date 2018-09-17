import React from 'react';
import { connect } from 'react-redux';
import './pastdreams.css'

export function PastDreams(props) {
		return (
				<div className="pastdreams">
					<section>
				        <header>
				          <h3>{props.dreamTitle}</h3>
				          <p>{props.dreamDate}</p>
				        </header>    
				        <p>{props.dreamSummary}</p>				                
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

const mapStateToProps = state => ({
  dreamTitle: state.dreamTitle,
  dreamSummary: state.dreamSummary,
  dreamDate: state.dreamDate
});

export default connect(mapStateToProps)(PastDreams);