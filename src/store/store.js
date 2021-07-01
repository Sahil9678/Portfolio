import { createStore } from 'redux';
import reducer from '../reducers/reducer';
import { combineReducers } from 'redux';

const store = createStore(combineReducers({reducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;