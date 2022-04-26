import React, { useEffect, useRef } from 'react';
import { loadDataForChart } from './redux/actions/chart';
import { useDispatch, useSelector } from 'react-redux';
import './scss/App.css';
import Form from './components/Form';
import { Chart } from './components/Chart';


function App() {
	const dispatch = useDispatch();
	const priceParagrahp = useRef();
	const timeParagrahp = useRef();

	const ws = new WebSocket('wss://ws-sandbox.coinapi.io/v1/')
	ws.addEventListener('open', (e) => {
		ws.send(JSON.stringify({
			"type": "hello",
			"apikey": "B691B7B0-5616-4419-BD62-3AF6ED85B723",
			"heartbeat": true,
			"subscribe_data_type": ["quote"],
			"subscribe_filter_asset_id": ["BTC/USD"]
		}))
	})
	ws.addEventListener('message', (e) => {
		let stockObj = JSON.parse(e.data);
		let date = stockObj.time_coinapi

		priceParagrahp.current.innerText = stockObj.bid_price;
		timeParagrahp.current.innerText = date
	})

	const handleChangeCurrency = (currency) => {
		ws.send(JSON.stringify({
			"type": "hello",
			"apikey": "B691B7B0-5616-4419-BD62-3AF6ED85B723",
			"heartbeat": true,
			"subscribe_data_type": ["quote"],
			"subscribe_filter_asset_id": [currency]
		}))
	};

	//для логування стейта
	const state = useSelector(state => {
		return state;
	});
	console.log('state', state);

	useEffect(() => {
		dispatch(loadDataForChart())
	}, [dispatch])


	return (
		<section className="app">
			<article className='app-wrapper'>
				<Form handleChangeCurrency={handleChangeCurrency} />
				<div className='app-data-wrapper'>
					<p className='app-data-title'>Market data:</p>
					<ul className='app-data'>
						<li className='app-data-item'>
							<span>Symbol:</span>
							<p>{state.chartReducer.currency}</p>
						</li>
						<li className='app-data-item'>
							<span>Price:</span>
							<p ref={priceParagrahp} ></p>
						</li>
						<li className='app-data-item'>
							<span>Time:</span>
							<p ref={timeParagrahp}></p>
						</li>
					</ul>
				</div>
				<Chart />
			</article>
		</section>
	);
}

export default App;
