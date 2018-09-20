import React from 'react';
import {connect} from 'react-redux';
import DeleteDream from './deletedream';

export class Display extends React.Component {
    render() {        
        return (
            <div>
                <section>
                    <header>
                      <h3>{this.props.dreamTitle}</h3>
                      <p>{this.props.dreamDate}</p>
                    </header>    
                    <p>{this.props.dreamSummary}</p>
                    <p>{this.props.index}</p>
                    <DeleteDream listIndex={this.props.index} />                             
                </section>                
            </div>
        );
    }
}

export default connect()(Display);