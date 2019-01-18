import { actionTypes } from './constants'

const initialState = {
  navigation: []
}

export function navbar (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_NAVBAR_STRUCTURE_REQUESTED:
      return {
        ...state
      }
    case actionTypes.GET_NAVBAR_STRUCTURE_COMPLETED:
      console.log(action.structure, 'asdasdasd')
      return {
        ...state,
        navigation: action.structure
      }
    default:
      return initialState
  }
}
