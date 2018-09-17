import React from 'react';
import { connect } from 'react-redux';
import './newdream.css';
import Input from './input';
import {required, nonEmpty, email} from '../validators';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {addDream} from '../actions';

export class NewDream extends React.Component {
	onSubmit(values){
		console.log(values);
		this.props.dispatch(addDream(values));
	}
	
	render () {		
		let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    New Dream Added
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }

		return (
				<form
	                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
	                )}>
	                {successMessage}
	                {errorMessage}
	                <Field
	                    name="dreamTitle"
	                    type="text"
	                    component={Input}
	                    label="Dream Title"
	                    validate={[required, nonEmpty]}
	                />	                
	                <Field
	                    name="dreamSummary"
	                    element="textarea"
	                    component={Input}
	                    label="Dream Summary"
	                    validate={[required, nonEmpty]}
	                />
	                <Field
	                    name="dreamDate"
	                    type="date"
	                    component={Input}
	                    label="Dream Date"
	                    validate={[required, nonEmpty]}
	                />
	                <button
	                    type="submit"
	                    disabled={this.props.pristine || this.props.submitting}>
	                    Add Dream
	                </button>
            	</form>				
			);
	}
}

export default reduxForm({
    form: 'contact'
})(NewDream);