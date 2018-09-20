import React from 'react';
import {connect} from 'react-redux';
import {deleteDream} from '../actions';

export class DeleteDream extends React.Component {
    render() {    
    console.log(this.props);            
        return (
            <div>
                <button onClick={() => this.props.dispatch(deleteDream(this.props.listIndex))}>Delete Dream</button>                
            </div>
        );
    }
}

export default connect()(DeleteDream);