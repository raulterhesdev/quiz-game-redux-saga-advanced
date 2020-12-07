import {
	call,
	put,
	take,
	cancel,
	fork,
	delay,
	race,
	select,
	spawn,
} from 'redux-saga/effects';
import {
	ANSWER_QUESTION,
	FETCH_QUIZ_CANCEL,
	FETCH_QUIZ_SUCCESS,
	FETCH_SCOREBOARD_START,
	START_GAME,
	TIME_LEFT,
} from '../actions/actionTypes';
import { fetchQuiz } from '../../utils/quizApi';
import {
	addScoreboard,
	addScoreboardFail,
	fetchQuizFail,
	fetchQuizSuccess,
	fetchScoreboardFail,
	fetchScoreboardStart,
	fetchScoreboardSuccess,
	finishGame,
	nextQuestion,
	resetGame,
} from '../actions';
import { addScore, fetchScoreboard } from '../../utils/firebase';
import moment from 'moment';

export function* fetchQuestionSaga() {
	try {
		yield delay(500); //Just for testing purposes
		const data = yield call(fetchQuiz);
		yield put(fetchQuizSuccess(data));
	} catch (error) {
		yield put(
			fetchQuizFail(
				'There was an error trying to get the questions. Please try again!'
			)
		);
	}
}

export function* cancelFetchQuiz(fetchQuiz) {
	yield take(FETCH_QUIZ_CANCEL);
	yield cancel(fetchQuiz);
	yield put(resetGame());
}

export function* startGameSaga() {
	while (true) {
		yield take(START_GAME);
		const fetch = yield fork(fetchQuestionSaga);
		yield fork(cancelFetchQuiz, fetch);
	}
}

export function* questionsSaga() {
	for (let i = 0; i < 10; i++) {
		yield take(ANSWER_QUESTION);
		yield put(nextQuestion());
	}
}

export function* submitScore() {
	const action = yield take(TIME_LEFT);
	const timeRemaining = action.payload;
	const name = yield select((state) => state.game.name);
	const score = yield select((state) => state.game.score);

	try {
		const scoreResult = yield call(addScore, {
			name,
			score,
			date: moment().format('LLL'),
			time: 60 - timeRemaining,
		});

		yield put(addScoreboard(scoreResult));
		yield put(fetchScoreboardStart());
	} catch (error) {
		addScoreboardFail(error);
	}
}

export function* gameSaga() {
	yield take(FETCH_QUIZ_SUCCESS);

	yield race({
		delay: delay(60000),
		finish: questionsSaga(),
	});

	yield put(finishGame());

	yield call(submitScore);
}

export function* scoreboardSaga() {
	while (true) {
		yield take(FETCH_SCOREBOARD_START);
		try {
			const scoreboard = yield call(fetchScoreboard);
			yield put(fetchScoreboardSuccess(scoreboard));
		} catch (error) {
			yield put(fetchScoreboardFail(error));
		}
	}
}

export default function* () {
	yield fork(startGameSaga);
	yield fork(gameSaga);
	yield spawn(scoreboardSaga);
}
