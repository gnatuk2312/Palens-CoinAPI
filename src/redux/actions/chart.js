import axios from "axios";
import { SET_DATA_FOR_CHARTS } from "../types";

export const loadDataForChart = () => {
	return async dispatch => {
		try {
			const response = await axios.get('https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_ETH_USD/history?period_id=1MTH&time_start=2021-01-01',
				{
					headers: {
						"X-CoinAPI-Key": "B691B7B0-5616-4419-BD62-3AF6ED85B723"
					}
				}
			)
			console.log('response', response);
			const data = [];
			response.data.map(item => {
				data.push({
					time_open: item.time_open.slice(0, 10),
					time_close: item.time_close.slice(0, 10),
					price_open: item.price_open,
					price_close: item.price_close
				})
			});
			dispatch({
				type: SET_DATA_FOR_CHARTS,
				payload: data
			})

		} catch (e) {

		}
	}

}