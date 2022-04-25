import React from 'react';

const Form = () => {
	return (
		<form className='app-form'>
			<input type='text' className='input' placeholder='currency (BTC, ETH, LINK...)' />
			<button type='submit' className='button'>Subscribe</button>
		</form>
	)
}
export default Form;