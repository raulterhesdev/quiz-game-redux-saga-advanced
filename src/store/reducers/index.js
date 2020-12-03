import { combineReducers } from 'redux';
import authReducer from './auth';
import gameReducer from './gameReducer';

export default combineReducers({ auth: authReducer, game: gameReducer });
