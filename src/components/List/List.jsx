import React from 'react';
import ListItem from '../ListItem/ListItem';

export default function List(props) {
	return (
		<>
			<ul className='list'>
				{props.items.map((item) => {
					return (
						<ListItem
							key={item.id}
							item={item}
							onDone={props.onDone}
							onItemDeleted={props.onItemDeleted}
						/>
					);
				})}
			</ul>
		</>
	);
}
