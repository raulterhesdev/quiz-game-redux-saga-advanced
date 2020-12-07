import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchScoreboardStart } from '../../../store/actions';

const Scoreboard = () => {
	const dispatch = useDispatch();
	const scoreboard = useSelector((state) => state.game.scoreboard);

	useEffect(() => {
		dispatch(fetchScoreboardStart());
	}, [dispatch]);

	const scoreList = scoreboard.map((score) => (
		<div key={score.id}>
			<p>{score.name}</p>
			<p>{score.score}</p>
			<p>{score.date}</p>
			<p>{score.time}</p>
		</div>
	));
	return (
		<div>
			<h1>Scoreboard</h1>
			{scoreList}
		</div>
	);
};

export default Scoreboard;
