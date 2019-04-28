import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import { navbarReducer } from '../redux/navbar/reducer'
import { projectsReducer } from '../redux/projects/reducer'
import { leadsReducer } from '../redux/leads/reducer'
import rootSaga from './sagas'

const combinedReducer = combineReducers({
  navbar: navbarReducer,
  projects: projectsReducer,
  leads: leadsReducer
})

const sagaMiddleware = createSagaMiddleware()

export default createStore(
  combinedReducer,
  applyMiddleware(
    createLogger(),
    sagaMiddleware
  )
)

sagaMiddleware.run(rootSaga)
