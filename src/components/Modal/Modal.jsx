import React from 'react';
import Card from '../Card/Card';

function Modal(props) {
	function modalHide(event) {
		let target = event.target;

		if (target.id === 'modalId') {
			props.onModalHide();
		}
	}

	return (
		<>
			<div
				id='modalId'
				onClick={modalHide}
				className={props.onShowModal ? 'modal' : 'modal hideModal'}
			>
				<Card className='modalCard'>{props.children}</Card>
			</div>
		</>
	);
}

export default Modal;
