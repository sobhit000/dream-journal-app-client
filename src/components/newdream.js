import React from 'react';
import './newdream.css'

export default class NewDream extends React.Component {
	render () {
		return (
				<div className="newdream">
					<section>
				        <header>
				          <h3>New Dream</h3>
				        </header>
				        <form id="record-dream">
				          <div className="form-section">
				            <label for="dream-title">Dream title</label>
				            <input type="text" name="dream-title" placeholder="Flying dream" required />
				          </div>
				          <div className="form-section">
				            <label for="dream-summary">Dream summary</label>
				            <textarea name="dream-summary" rows="15"   required></textarea>
				          </div>                  

				          <div className="form-section">
				            <p className="dream-date-header">Date of Dream</p>
				            <input type="number" name="date-month" placeholder="01" min="1" max="12" required="" /> .
				            <input type="number" name="date-day" className="date-day"  placeholder="01" min="1" max="31" required="" /> .
				            <input type="number" name="date-year" className="date-year" placeholder="2017" min="2016" max="2017" required="" />
				          </div>

				          <button type="submit">Submit</button>
				          <button type="reset">Reset</button>
				        </form>
      				</section>
				</div>
			);
	}
}