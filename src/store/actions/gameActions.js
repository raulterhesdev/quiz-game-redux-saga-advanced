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
	TIME_LEFT,
	ADD_SCOREBOARD,
	FETCH_SCOREBOARD_START,
	FETCH_SCOREBOARD_FAIL,
	FETCH_SCOREBOARD_SUCCESS,
	ADD_SCOREBOARD_FAIL,
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

export const timeLeft = (payload) => ({
	type: TIME_LEFT,
	payload,
});

export const addScoreboard = (payload) => ({
	type: ADD_SCOREBOARD,
	payload,
});
export const addScoreboardFail = (payload) => ({
	type: ADD_SCOREBOARD_FAIL,
	payload,
});

export const fetchScoreboardStart = (payload) => ({
	type: FETCH_SCOREBOARD_START,
	payload,
});

export const fetchScoreboardFail = (payload) => ({
	type: FETCH_SCOREBOARD_FAIL,
	payload,
});

export const fetchScoreboardSuccess = (payload) => ({
	type: FETCH_SCOREBOARD_SUCCESS,
	payload,
});
