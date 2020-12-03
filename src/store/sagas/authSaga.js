import { call, put, take } from 'redux-saga/effects';
import { AUTH_START, LOGOUT_START } from '../actions/actionTypes';
import { registerUser, loginUser, logoutUser } from '../../utils/firebase';
import { authFail, authSuccess, logoutFail, logoutSuccess } from '../actions';

export function* logout() {
	try {
		yield call(logoutUser);
		yield put(logoutSuccess());
	} catch (error) {
		yield put(logoutFail(error.message));
	}
}

export function* authorize(action) {
	try {
		const user = action.payload.isRegister
			? yield call(registerUser, action.payload)
			: yield call(loginUser, action.payload);
		yield put(authSuccess(user));
		return user;
	} catch (error) {
		yield put(authFail(error.message));
	}
}

// TODO: try to add the register here too
export function* loginFlow() {
	while (true) {
		const action = yield take(AUTH_START);
		const user = yield call(authorize, action);
		if (user) {
			yield take(LOGOUT_START);
			yield call(logout);
		}
	}
}

export default function* () {
	yield loginFlow();
}
