import React, { useEffect } from 'react';
//import { loadDataForChart } from './redux/actions/chart';
import { useDispatch, useSelector } from 'react-redux';
import './scss/App.css';
import Form from './components/Form';
import { Chart } from './components/Chart';


function App() {
	const dispatch = useDispatch();

	//для логування стейта
	const state = useSelector(state => {
		return state;
	});
	console.log('state', state);


	useEffect(() => {
		//dispatch(loadDataForChart())
	}, [dispatch])

	return (
		<section className="app">
			<article className='app-wrapper'>
				<Form />
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
						<Chart />
					</div>
				</div>
			</article>
		</section>
	);
}

export default App;
