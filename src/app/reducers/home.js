import { handleActions } from 'redux-actions'

import actions from '../actions/home'

const defaultState = {}

export default handleActions({
  [actions.home.open]: state => ({
    ...state
  })},
  defaultState
)