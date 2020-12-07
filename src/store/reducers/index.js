import { combineReducers } from 'redux';
import authReducer from './auth';
import gameReducer from './game';
import reviewsReducer from './reviews';

export default combineReducers({
	auth: authReducer,
	game: gameReducer,
	reviews: reviewsReducer,
});
