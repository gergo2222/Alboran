import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { navbarReducer } from '../redux/navbar/reducer'
import { projectsReducer } from '../redux/projects/reducer'
import { leadsReducer } from '../redux/leads/reducer'

const combinedReducer = combineReducers({
  navbar: navbarReducer,
  projects: projectsReducer,
  leads: leadsReducer
})

export default createStore(
  combinedReducer,
  applyMiddleware(
    thunk,
    createLogger()
  )
)
