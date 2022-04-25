import { SET_NAME_OF_CURRENCY } from "../types";

export const setNameOfCurrency = (name) => {
	return {
		type: SET_NAME_OF_CURRENCY,
		payload: name
	}
}