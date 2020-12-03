import {
	ANSWER_QUESTION,
	FETCH_QUIZ_CANCEL,
	FETCH_QUIZ_FAIL,
	FETCH_QUIZ_START,
	FETCH_QUIZ_SUCCESS,
	NEXT_QUESTION,
	RESET_GAME,
	START_GAME,
	FINISH_GAME,
} from './actionTypes';

export const startGame = (payload) => ({
	type: START_GAME,
	payload,
});

export const resetGame = (payload) => ({
	type: RESET_GAME,
	payload,
});

export const fetchQuizStart = (payload) => ({
	type: FETCH_QUIZ_START,
	payload,
});

export const fetchQuizSuccess = (payload) => ({
	type: FETCH_QUIZ_SUCCESS,
	payload,
});

export const fetchQuizFail = (payload) => ({
	type: FETCH_QUIZ_FAIL,
	payload,
});

export const fetchQuizCancel = (payload) => ({
	type: FETCH_QUIZ_CANCEL,
	payload,
});

export const nextQuestion = (payload) => ({
	type: NEXT_QUESTION,
	payload,
});

export const answerQuestion = (payload) => ({
	type: ANSWER_QUESTION,
	payload,
});

export const finishGame = (payload) => ({
	type: FINISH_GAME,
	payload,
});
