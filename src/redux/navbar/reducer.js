import { actionTypes } from './constants'

const initialState = {
  navigation: {
    home: {
        label: "Home",
        menu: []
      }
    },
  activeSection: 'home'
}

export function navbar (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_NAVBAR_STRUCTURE_REQUESTED:
      return {
        ...state
      }
    case actionTypes.GET_NAVBAR_STRUCTURE_COMPLETED:
      return {
        ...state,
        navigation: action.structure
      }
    case actionTypes.SECTION_CHANGED:
      return {
        ...state,
        activeSection: action.selectedSection
      }
    default:
      return initialState
  }
}
