import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	answerQuestion as answerQuestionAction,
	finishGame,
} from '../../../store/actions';

const Quiz = ({ score, timeLeft }) => {
	const dispatch = useDispatch();

	const question = useSelector(
		(state) => state.game.questions[state.game.currentQuestionIndex]
	).question;

	const index = useSelector((state) => state.game.currentQuestionIndex);

	const quitGame = () => {
		dispatch(finishGame());
	};

	const answerQuestion = (answer) => {
		dispatch(answerQuestionAction({ answer }));
	};

	return (
		<div>
			<p>Time Left: {timeLeft}</p>
			<p>Score: {score}</p>
			<p>Question : {index + 1} / 10</p>
			<p>{question}</p>
			<button onClick={() => answerQuestion('True')}>True</button>
			<button onClick={() => answerQuestion('False')}>False</button>
			<button onClick={quitGame}>Quit Game</button>
		</div>
	);
};

export default Quiz;
