import React from 'react';
import { useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { deleteItem, changeDone } from '../../actions/listAction';

function DoneIcon(props) {
	if (props.done) {
		return <img src='./assets/on.png' alt='On'></img>;
	} else {
		return <img src='./assets/off.png' alt='On'></img>;
	}
}

export default function ListItem(props) {
	const dispatch = useDispatch();

	return (
		<>
			<li>
				<Card className={props.item.done ? 'done item' : 'item'}>
					{props.item.text}
					<div>
						<button
							className='btn'
							onClick={() => {
								dispatch(changeDone(props.item.id));
							}}
						>
							<DoneIcon done={props.item.done} />
						</button>
						<button
							className='btn'
							onClick={() => {
								dispatch(deleteItem(props.item.id));
							}}
						>
							<img
								src='./assets/delete.png'
								alt='Delete Item'
							></img>
						</button>
					</div>
				</Card>
			</li>
		</>
	);
}
