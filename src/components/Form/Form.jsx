import React, { useState } from 'react';

export default function Form(props) {
	const [item, setItem] = useState('');

	function handleChange(event) {
		let text = event.target.value;

		setItem(text);
	}

	function addItem(event) {
		event.preventDefault();

		if (item) {
			// setItems([...items, item]);
			props.onAddItem(item);
			setItem('');
		} else {
			alert('Please insert a new item');
		}
	}

	return (
		<>
			<form className='form'>
				<input type='text' onChange={handleChange} value={item} />
				<button onClick={addItem}>ADICIONAR</button>
			</form>
		</>
	);
}
