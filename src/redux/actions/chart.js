import axios from "axios";
import toast from "react-hot-toast";
import { SET_DATA_FOR_CHARTS } from "../types";

export const loadDataForChart = (currency = "BTC/USD") => {
	return async dispatch => {
		try {
			const response = await axios.get(`https://rest.coinapi.io/v1/ohlcv/${currency}/history?period_id=1MTH&time_start=2021-02-01`,
				{
					headers: {
						"X-CoinAPI-Key": "213362F1-135E-4DB2-B4F8-752BC634C941"
					}
				}
			)
			const data = [];
			response.data.map(item => {
				return data.push({
					time_open: item.time_open.slice(0, 10),
					price_open: item.price_open,
				})
			});
			dispatch({
				type: SET_DATA_FOR_CHARTS,
				payload: data
			})
			toast.success(`New chart of ${currency}`)

		} catch (err) {
			toast.error(`Error ${err}`)
		}
	}
}