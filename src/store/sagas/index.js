import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import gameSaga from './gameSaga';
import reviewsSaga from './reviewsSaga';

export default function* saga() {
	yield all([authSaga(), gameSaga(), reviewsSaga()]);
}
