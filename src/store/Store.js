import { createStore , applyMiddleware} from 'redux'
import { combineReducers } from 'redux'
import tabReducer from '../reducers/tabReducers'
import bioData from '../reducers/bioReducers'
import thunk from 'redux-thunk';

const reducer = combineReducers({
    bioData,
    tabReducer
});

const store = createStore(reducer,applyMiddleware(thunk))

export default store