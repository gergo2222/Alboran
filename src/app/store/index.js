import { applyMiddleware, createStore } from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const middleware = [thunk]
const devMiddleware = [logger]

export default createStore(
  rootReducer,
  applyMiddleware(...[...middleware, ...devMiddleware])
)