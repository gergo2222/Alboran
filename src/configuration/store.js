import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import * as navbarReducer from '../redux/navbar/reducer'

const combinedReducer = combineReducers(
  navbarReducer
)

export default createStore(
  combinedReducer,
  applyMiddleware(
    thunk,
    createLogger()
  )
)
