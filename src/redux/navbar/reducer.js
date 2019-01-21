import { actionTypes } from './constants'

const initialState = {
  navigation: {
    Home: {
        label: "Home",
        menu: []
      }
    },
  activeSection: 'Home'
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
