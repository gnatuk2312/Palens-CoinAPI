import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const Chart = () => {

	const { chart, currency } = useSelector(state => state.chartReducer);
	const data = {
		labels: chart.map(item => {
			return item.time_open
		}),
		datasets: [
			{
				label: 'Open Price $',
				data: chart.map(item => {
					return item.price_open
				}),
				borderColor: 'rgb(0, 99, 132)',
				backgroundColor: 'rgba(0, 99, 132, 0.5)',
			}
		],
	};
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: `Chart Line of ${currency}`,
			},
		},
	};
	return (
		<div className='app-chart-wrapper'>
			<p className='app-chart-title'>Charting data:</p>
			<div className='app-chart'>
				<Line options={options} data={data} />
			</div>
		</div>
	);
};

