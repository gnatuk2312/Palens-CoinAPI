import { useEffect, useState } from 'react';

export const useValidation = (value, validations, name) => {

	const [isEmpty, setEmpty] = useState(false);

	const [inputValid, setInputValid] = useState(false);

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'isEmpty':
					value ? setEmpty(false) : setEmpty(true)
					break;
				default:
					return null;
			}
		}

	}, [value, validations]);

	useEffect(() => {
		if (isEmpty) {
			setInputValid(false);
		} else {
			setInputValid(true);
		}

	}, [isEmpty])

	return {
		isEmpty,
		inputValid
	};
};