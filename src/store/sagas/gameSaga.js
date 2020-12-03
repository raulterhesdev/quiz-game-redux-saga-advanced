import {
	call,
	put,
	take,
	all,
	cancel,
	fork,
	delay,
	race,
} from 'redux-saga/effects';
import {
	ANSWER_QUESTION,
	FETCH_QUIZ_CANCEL,
	FETCH_QUIZ_SUCCESS,
	START_GAME,
} from '../actions/actionTypes';
import { fetchQuiz } from '../../utils/quizApi';
import {
	fetchQuizFail,
	fetchQuizSuccess,
	finishGame,
	nextQuestion,
	resetGame,
} from '../actions';

export function* fetchQuestionSaga() {
	try {
		yield delay(500); //Just for testing purposes
		const data = yield call(fetchQuiz);
		yield put(fetchQuizSuccess(data));
	} catch (error) {
		console.log(error);
		yield put(
			fetchQuizFail(
				'There was an error trying to get the questions. Please try again!'
			)
		);
	}
}

export function* startGameSaga() {
	while (true) {
		yield take(START_GAME);
		const fetch = yield fork(fetchQuestionSaga);
		yield take(FETCH_QUIZ_CANCEL);
		yield cancel(fetch);
		yield put(resetGame());
	}
}

export function* questionsSaga() {
	for (let i = 0; i < 10; i++) {
		yield take(ANSWER_QUESTION);
		yield put(nextQuestion());
	}
}

export function* gameSaga() {
	yield take(FETCH_QUIZ_SUCCESS);

	yield race({
		delay: delay(60000),
		finish: questionsSaga(),
	});

	yield put(finishGame());
}

export default function* () {
	yield all([startGameSaga(), gameSaga()]);
}
