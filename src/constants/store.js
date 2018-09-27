import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import app from '../reducers/app-reducer';

export default createStore(
  combineReducers({ app }),
  applyMiddleware(thunk)
);
