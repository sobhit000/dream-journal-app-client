import React from 'react';
import './signin.css'

export default class Signin extends React.Component {
	render () {
		return (
				<div className="signin">
					<section>
				        <form className='signin-form'>            
				            <div>
				              <label for="username">Email</label>
				              <input type="text" name='username' id='username' />
				            </div>
				            <div>
				              <label for="password">Password</label>
				              <input type="password" name='password' id='password' />
				            </div>
				            <button type='submit'>Sign In</button>
				        </form>
      				</section>
				</div>
			);
	}
}