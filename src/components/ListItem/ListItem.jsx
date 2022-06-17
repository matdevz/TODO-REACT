import React from 'react';
import Card from '../Card/Card';
function DoneIcon(props) {
	if (props.done) {
		return <img src='./assets/on.png' alt='On'></img>;
	} else {
		return <img src='./assets/off.png' alt='On'></img>;
	}
}

export default function ListItem(props) {
	return (
		<>
			<li>
				<Card className={props.item.done ? 'done item' : 'item'}>
					{props.item.text}
					<div>
						<button
							className='btn'
							onClick={() => {
								props.onDone(props.item);
							}}
						>
							<DoneIcon done={props.item.done} />
						</button>
						<button
							className='btn'
							onClick={() => {
								props.onItemDeleted(props.item);
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
