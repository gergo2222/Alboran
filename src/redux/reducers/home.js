import { handleActions } from 'redux-actions'

import actions from '../../containers/home/actions'

const defaultState = {}

export default handleActions({
  [actions.home.open]: state => ({
    ...state
  })},
  defaultState
)