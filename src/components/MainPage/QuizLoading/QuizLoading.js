import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchQuizCancel } from '../../../store/actions';

const QuizLoading = () => {
	const dispatch = useDispatch();

	const cancelGame = () => {
		dispatch(fetchQuizCancel());
	};

	return (
		<div>
			<p>Loading...</p>
			<button onClick={cancelGame}>Cancel</button>
		</div>
	);
};

export default QuizLoading;
