import {
	ADD_REVIEW_FAIL,
	ADD_REVIEW_START,
	ADD_REVIEW_SUCCESS,
	FETCH_REVIEWS_FAIL,
	FETCH_REVIEWS_START,
	FETCH_REVIEWS_SUCCESS,
} from './actionTypes';

export const addReviewStart = (payload) => ({
	type: ADD_REVIEW_START,
	payload,
});

export const addReviewFail = (payload) => ({
	type: ADD_REVIEW_FAIL,
	payload,
});

export const addReviewSuccess = (payload) => ({
	type: ADD_REVIEW_SUCCESS,
	payload,
});

export const fetchReviewsStart = (payload) => ({
	type: FETCH_REVIEWS_START,
	payload,
});

export const fetchReviewsFail = (payload) => ({
	type: FETCH_REVIEWS_FAIL,
	payload,
});

export const fetchReviewsSuccess = (payload) => ({
	type: FETCH_REVIEWS_SUCCESS,
	payload,
});
