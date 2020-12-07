import {
	ADD_SCOREBOARD,
	ANSWER_QUESTION,
	FETCH_QUIZ_FAIL,
	FETCH_QUIZ_SUCCESS,
	FETCH_SCOREBOARD_SUCCESS,
	FINISH_GAME,
	NEXT_QUESTION,
	RESET_GAME,
	START_GAME,
} from '../actions/actionTypes';

const initialState = {
	stage: 1,
	name: '',
	questions: [],
	error: null,
	answers: [],
	score: null,
	currentQuestionIndex: null,
	scoreboard: [],
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case START_GAME:
			return {
				...state,
				stage: 2,
				name: payload.name,
				questions: [],
				error: null,
				answers: [],
				score: null,
			};
		case RESET_GAME:
			return initialState;
		case FETCH_QUIZ_SUCCESS:
			return {
				...state,
				stage: 3,
				questions: payload,
				error: null,
				score: 0,
				currentQuestionIndex: 0,
			};
		case FETCH_QUIZ_FAIL:
			return {
				...state,
				stage: 1,
				name: '',
				questions: [],
				error: payload,
				answers: [],
				score: null,
			};
		case ANSWER_QUESTION:
			const currentQuestion = state.questions[state.currentQuestionIndex];
			const isCorrect =
				payload.answer === currentQuestion.correct_answer ? true : false;
			let newScore = state.score;
			if (isCorrect) newScore++;
			return {
				...state,
				score: newScore,
				answers: [
					...state.answers,
					{
						question: currentQuestion.question,
						answer: payload.answer,
						correctAnswer: currentQuestion.correct_answer,
					},
				],
			};
		case NEXT_QUESTION:
			return {
				...state,
				currentQuestionIndex: state.currentQuestionIndex + 1,
			};
		case FINISH_GAME:
			return {
				...state,
				stage: 4,
			};
		case ADD_SCOREBOARD:
			return {
				...state,
				scoreboard: [...state.scoreboard, payload],
			};
		case FETCH_SCOREBOARD_SUCCESS:
			return {
				...state,
				scoreboard: payload,
			};
		default:
			return state;
	}
};
