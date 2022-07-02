import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from '../ListItem/ListItem';

export default function List() {
	const items = useSelector((state) => state);

	return (
		<>
			<ul className='list'>
				{items.map((item) => {
					return <ListItem key={item.id} item={item} />;
				})}
			</ul>
		</>
	);
}
