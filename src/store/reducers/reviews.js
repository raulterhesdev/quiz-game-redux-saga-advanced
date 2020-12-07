import {
	ADD_REVIEW_FAIL,
	ADD_REVIEW_SUCCESS,
	FETCH_REVIEWS_FAIL,
	FETCH_REVIEWS_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
	reviews: [],
	error: null,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_REVIEW_SUCCESS:
			return {
				...state,
				reviews: [...state.reviews, payload],
			};
		case ADD_REVIEW_FAIL:
			return {
				...state,
				error: payload,
			};
		case FETCH_REVIEWS_SUCCESS:
			return {
				...state,
				reviews: payload,
			};
		case FETCH_REVIEWS_FAIL:
			return {
				...state,
				error: payload,
			};
		default:
			return state;
	}
};
