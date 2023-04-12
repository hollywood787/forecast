import { createStore } from 'redux'
import combineReducers from './reducer'

export const store = createStore(combineReducers);