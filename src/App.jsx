import React, { useState, useEffect } from 'react';
import './App.css';

import Item from './components/Item/Item';
import List from './components/List/List';
import Form from './components/Form/Form';
import Modal from './components/Modal/Modal';

const SAVED_ITEMS = 'savedItems';

export default function App() {
	const [items, setItems] = useState(
		() => JSON.parse(localStorage.getItem(SAVED_ITEMS)) || []
	);

	const [onShowModal, setOnShowModal] = useState(false);

	useEffect(() => {
		localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
	}, [items]);
	function onAddItem(text) {
		let item = new Item(text);
		setItems([...items, item]);
		onModalHide();
	}

	function onItemDeleted(item) {
		let filteredItems = items.filter((itemList) => itemList.id !== item.id);

		setItems(filteredItems);
	}

	function onDone(item) {
		let updatedItems = items.map((itemList) => {
			if (itemList.id === item.id) {
				itemList.done = !itemList.done;
			}

			return itemList;
		});

		setItems(updatedItems);
	}
	function onModalHide() {
		setOnShowModal(false);
	}

	return (
		<>
			<div className='container'>
				<header className='header'>
					<h1 className='title'>Todo React</h1>
					<button
						className='addBtn'
						onClick={() => {
							setOnShowModal(true);
						}}
					>
						+
					</button>
				</header>
				{/* <Form onAddItem={onAddItem} /> */}
				<List
					onDone={onDone}
					onItemDeleted={onItemDeleted}
					items={items}
				/>

				<Modal onShowModal={onShowModal} onModalHide={onModalHide}>
					<Form onAddItem={onAddItem} />
				</Modal>
			</div>
		</>
	);
}
