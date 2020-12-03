import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startGame as startGameAction } from '../../../store/actions';

const NameSelection = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('wegweg');

	const startGame = () => {
		if (name.length > 0) {
			dispatch(startGameAction({ name }));
		}
	};
	return (
		<div>
			<label htmlFor='name'>Enter your name:</label>
			<input
				name='name'
				type='text'
				onChange={(e) => setName(e.target.value)}
				value={name}
			/>
			<button onClick={startGame}>Start Game</button>
		</div>
	);
};

export default NameSelection;
