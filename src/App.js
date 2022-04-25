import React from 'react';
import './App.css';

function App() {
	return (
		<section className="app">
			<article className='app-wrapper'>
				<form className='app-form'>
					<input type='text' className='input' placeholder='Назва криптовалюти' />
					<button type='submit' className='button'>Subscribe</button>
				</form>
				<div className='app-data-wrapper'>
					<p className='app-data-title'>Market data:</p>
					<ul className='app-data'>
						<li className='app-data-item'>
							<span>Symbol:</span>
							<p>BTC</p>
						</li>
						<li className='app-data-item'>
							<span>Price:</span>
							<p>$10000</p>
						</li>
						<li className='app-data-item'>
							<span>Time:</span>
							<p>Aug 7, 9:45 AM</p>
						</li>
					</ul>
				</div>
				<div className='app-chart-wrapper'>
					<p className='app-chart-title'>Charting data:</p>
					<div className='app-chart'>
						<div></div>
					</div>
				</div>
			</article>
		</section>
	);
}

export default App;
