import React from 'react';
import { useDispatch } from 'react-redux';
import { resetGame } from '../../../store/actions';

const GameOver = ({ score }) => {
	const dispatch = useDispatch();
	const playAgain = () => {
		dispatch(resetGame());
	};
	return (
		<div>
			<p>Game over. Your score is: {score}</p>
			<button onClick={playAgain}>Play Again</button>
		</div>
	);
};

export default GameOver;
