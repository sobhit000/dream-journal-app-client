import React from 'react';
import './signup.css';
import Navbar from './navbar';

export default class Signup extends React.Component {
	render () {
		return (
				<div className="signup">
					<Navbar />
					<section>
				        <header>
				            <h3>SignUp</h3>
				        </header>
				        <form className='signup-form'>
				            <div>
				              <label htmlFor="first-name">First name</label>
				              <input placeholder='First Name' type="text" name='first-name' id='first-name' />
				            </div>
				            <div>
				              <label htmlFor="last-name">Last name</label>
				              <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
				            </div>
				            <div>
				              <label htmlFor="username">Email</label>
				              <input type="text" name='username' id='username-signup' />
				            </div>
				            <div>
				              <label htmlFor="password">Password</label>
				              <input type="password" name='password' id='password-signup' />
				            </div>
				            <button type='submit'>Sign Up</button>
				        </form>
      				</section>
				</div>
			);
	}
}