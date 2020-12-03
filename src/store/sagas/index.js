import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import gameSaga from './gameSaga';

export default function* saga() {
	yield all([authSaga(), gameSaga()]);
}
