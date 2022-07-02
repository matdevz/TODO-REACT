import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';

import List from './components/List/List';
import Form from './components/Form/Form';
import Modal from './components/Modal/Modal';
import { listReducer } from './reducers/listReducer';

const SALVED_ITEMS = 'savedItems';

function persistState(state) {
	localStorage.setItem(SALVED_ITEMS, JSON.stringify(state));
}
function loadState() {
	const actualState = localStorage.getItem(SALVED_ITEMS);

	if (actualState) return JSON.parse(actualState);
	if (!actualState) return [];
}

const store = createStore(listReducer, loadState());
store.subscribe(() => persistState(store.getState()));

export default function App() {
	const [onShowModal, setOnShowModal] = useState(false);

	function onModalHide() {
		setOnShowModal(false);
	}

	return (
		<>
			<Provider store={store}>
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
					<List />

					<Modal onShowModal={onShowModal} onModalHide={onModalHide}>
						<Form onModalHide={onModalHide} />
					</Modal>
				</div>
			</Provider>
		</>
	);
}
