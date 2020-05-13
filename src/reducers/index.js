import {combineReducers} from 'redux';
import errorReducer from './errorReducers';
import authReducer from './authReducers';

export default combineReducers({
    error:errorReducer,
    auth:authReducer
})