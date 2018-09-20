import React from 'react';
import { connect } from 'react-redux';
import './pastdreams.css';
import Display from './display';

export function PastDreams(props) {				
		const pastDreams = props.pastDreams.map((dream, index) => {
			return <li key={index}><Display index={index} {...dream}/></li>
		})
		
		return (
				<div className="pastdreams">
					<ul>
						{pastDreams}
					</ul>				    
	      		</div>
			);
	
}

const mapStateToProps = state => ({
    pastDreams: state.dreams.pastDreams
});

export default connect(mapStateToProps)(PastDreams);