import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useInput } from '../hooks/useInput';
//import { loadDataForChart } from '../redux/actions/chart';
import { setNameOfCurrency } from '../redux/actions/currency';

const Form = () => {
	const dispatch = useDispatch();

	const [currency, setCurrency] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		console.log('curr', currency);
		const uppercase = currency.toUpperCase();
		dispatch(setNameOfCurrency(uppercase));
		//dispatch(loadDataForChart(uppercase));
	};
	const changeHandler = (e) => {
		inputValidation.onChange(e)
		setCurrency(e.target.value);
	}

	const inputValidation = useInput('', { isEmpty: true, isEnglish: true })

	return (
		<>
			<form onSubmit={submitHandler} className='app-form'>
				<input
					onChange={changeHandler}
					onBlur={e => inputValidation.onBlur(e)}
					value={inputValidation.value}
					type='text'
					className='input'
					placeholder='currency (BTC, ETH, LINK...)' />
				<button disabled={!inputValidation.inputValid} type='submit' className='button'>Subscribe</button>
			</form>
			{(inputValidation.isDirty && inputValidation.isEmpty) && <p className='app-error'>Input is empty</p>}
			{(inputValidation.isDirty && inputValidation.isEnglish) && <p className='app-error'>Only English letters (btc, eth, bnb)</p>}
		</>
	)
}
export default Form;