import reducer from './reducer'
import {applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

const store = createStore (reducer,applyMiddleware(thunk) )
export default store;
