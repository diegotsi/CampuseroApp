import {combineReducers} from 'redux';
import  homescreen from './HomeScreen';
import  events from './events';
import  user from './user';

export default combineReducers({
    homescreen,
    events,
    user
})