import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import covidReducer from './covid/covid';

const reducer = combineReducers({
  covid: covidReducer,

});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
