import {combineReducers} from 'redux';
import userInfo from './git_info';
import tabs from './tabs';

export default combineReducers({
    userInfo: userInfo,
    tabs: tabs
});