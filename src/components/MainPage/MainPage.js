import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import QuizLoading from './QuizLoading/QuizLoading';
import Quiz from './Quiz/Quiz';
import GameOver from './GameOver/GameOver';
import NameSelection from './NameSelection/NameSelection';

function MainPage() {
	const [timeLeft, setTimeLeft] = useState(60);
	const stage = useSelector((state) => state.game.stage);
	const score = useSelector((state) => state.game.score);

	useEffect(() => {
		if (stage === 3) {
			const interval = setInterval(() => {
				setTimeLeft((prev) => prev - 1);
			}, 1000);
		}
	}, [stage]);

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

	return <>{gameDisplay}</>;
}

export default MainPage;
