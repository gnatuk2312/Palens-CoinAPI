import { SET_DATA_FOR_CHARTS } from '../types'

const initialState = {
	chart: [],
}
export const reducer = (state = initialState, action) => {
	console.log('action', action);

	switch (action.type) {

		case SET_DATA_FOR_CHARTS:
			return {
				...state,
				chart: action.payload
			}

		default:
			return state;
	}
}