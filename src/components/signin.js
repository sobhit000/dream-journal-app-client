import React from 'react';
import './signin.css'
import Navbar from './navbar';

export default class Signin extends React.Component {
	render () {
		return (
				<div className="signin">
					<Navbar />
					<section>
				        <form className='signin-form'>            
				            <div>
				            	<h3>SignIn</h3>	
				              <label htmlFor="username">Email</label>
				              <input type="text" name='username' id='username' />
				            </div>
				            <div>
				              <label htmlFor="password">Password</label>
				              <input type="password" name='password' id='password' />
				            </div>
				            <button type='submit'>Sign In</button>
				        </form>
      				</section>
				</div>
			);
	}
}