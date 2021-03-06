import { SET_DATA_FOR_CHARTS, SET_NAME_OF_CURRENCY } from '../types'

const initialState = {
	currency: "BTC/USD",
	chart: [],
}
export const chartReducer = (state = initialState, action) => {

	switch (action.type) {

		case SET_DATA_FOR_CHARTS:
			return {
				...state,
				chart: action.payload
			}

		case SET_NAME_OF_CURRENCY:
			return {
				...state,
				currency: action.payload
			}

		default:
			return state;
	}
}