import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import QuizLoading from './QuizLoading/QuizLoading';
import Quiz from './Quiz/Quiz';
import GameOver from './GameOver/GameOver';
import NameSelection from './NameSelection/NameSelection';
import Reviews from './Reviews/Reviews';
import { timeLeft as timeLeftAction } from '../../store/actions/index';
import Scoreboard from './Scoreboard/Scoreboard';

function MainPage() {
	const [timeLeft, setTimeLeft] = useState(60);
	const stage = useSelector((state) => state.game.stage);
	const score = useSelector((state) => state.game.score);
	const dispatch = useDispatch();

	useEffect(() => {
		let interval;
		if (stage === 3) {
			interval = setInterval(() => {
				setTimeLeft((prev) => prev - 1);
			}, 1000);
		}
		if (stage === 4) {
			dispatch(timeLeftAction(timeLeft));
		}
		return () => {
			clearInterval(interval);
			setTimeLeft(60);
		};
	}, [stage, dispatch]);

	let gameDisplay;

	switch (stage) {
		case 1:
			gameDisplay = <NameSelection />;
			break;
		case 2:
			gameDisplay = <QuizLoading />;
			break;
		case 3:
			gameDisplay = <Quiz score={score} timeLeft={timeLeft} />;
			break;
		case 4:
			gameDisplay = <GameOver score={score} />;
			break;
		default:
			break;
	}

	return (
		<>
			{gameDisplay}
			<Reviews />
			<Scoreboard />
		</>
	);
}

export default MainPage;
