import { call, take, all, put } from 'redux-saga/effects';
import { ADD_REVIEW_START, FETCH_REVIEWS_START } from '../actions/actionTypes';
import { addReview, fetchReviews } from '../../utils/firebase';
import {
	addReviewFail,
	addReviewSuccess,
	fetchReviewsFail,
	fetchReviewsSuccess,
} from '../actions';
import moment from 'moment';

export function* addReviewSaga() {
	while (true) {
		const action = yield take(ADD_REVIEW_START);
		const data = {
			name: action.payload.name,
			review: action.payload.review,
			date: moment().format('LLL'),
		};
		try {
			const reviews = yield call(addReview, data);

			yield put(addReviewSuccess(reviews));
		} catch (error) {
			yield put(addReviewFail(error));
		}
	}
}

// use retry multiple times here
export function* fetchReviewsSaga() {
	while (true) {
		yield take(FETCH_REVIEWS_START);
		try {
			const reviews = yield call(fetchReviews);
			yield put(fetchReviewsSuccess(reviews));
		} catch (error) {
			yield put(fetchReviewsFail(error));
		}
	}
}

export default function* () {
	yield all([addReviewSaga(), fetchReviewsSaga()]);
}
