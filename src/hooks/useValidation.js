import { useEffect, useState } from 'react';

export const useValidation = (value, validations, name) => {

	const [isEmpty, setEmpty] = useState(false);
	const [isEnglish, setLoginError] = useState(false);

	const [inputValid, setInputValid] = useState(false);

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'isEmpty':
					value ? setEmpty(false) : setEmpty(true)
					break;

				case 'isEnglish':
					const re = /^[a-zA-Z]+$/;
					re.test(String(value).toLowerCase()) ? setLoginError(false) : setLoginError(true);
					break;
				default:
					return null;
			}
		}

	}, [value, validations]);

	useEffect(() => {
		if (isEmpty || isEnglish) {
			setInputValid(false);
		} else {
			setInputValid(true);
		}

	}, [isEmpty, isEnglish])

	return {
		isEmpty,
		isEnglish,
		inputValid
	};
};