import {
	AUTH_FAIL,
	AUTH_SUCCESS,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL,
} from '../actions/actionTypes';
const initialState = {
	isLoggedIn: true,
	authError: null,
	user: null,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case AUTH_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				authError: null,
				user: payload,
			};
		case AUTH_FAIL:
			return {
				...state,
				isLoggedIn: false,
				authError: payload,
				user: null,
			};
		case LOGOUT_SUCCESS:
			return {
				...state,
				isLoggedIn: false,
				authError: null,
				user: null,
			};
		case LOGOUT_FAIL:
			return {
				...state,
				authError: payload,
			};
		default:
			return state;
	}
};
