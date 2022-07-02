import React, { useState } from 'react';
import { addItem } from '../../actions/listAction';
import { useDispatch } from 'react-redux';

export default function Form(props) {
	const dispatch = useDispatch();

	const [item, setItem] = useState('');

	function handleChange(event) {
		let text = event.target.value;

		setItem(text);
	}

	function addItems(event) {
		event.preventDefault();

		if (item) {
			dispatch(addItem(item));
			setItem('');
			props.onModalHide();
		} else {
			alert('Please insert a new item');
		}
	}

	return (
		<>
			<form className='form'>
				<input type='text' onChange={handleChange} value={item} />
				<button onClick={addItems}>ADICIONAR</button>
			</form>
		</>
	);
}
