import { actionTypes } from './constants'

const initialState = {
  items: []
}

export const projectsReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case actionTypes.projectsRequested:
      return {
        ...state
      }
    case actionTypes.projectsReceived:
      return {
        ...state,
        items: payload
      }
    default:
      return state
  }
}
