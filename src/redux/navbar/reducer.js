import { actionTypes } from './constants'

const initialState = {
  sectionLayout: [
    { id: 'home', label: 'Home', defaultMenuItem: 'home', defaultItemUrl: '/home', icon: 'home'},
  ],
  menuLayout: {
    home: [
      { id: 'home', label: 'Home', url: '/home'},
    ]
  },
  activeSection: 'home',
  activeMenuItem: 'home'
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
        sectionLayout: action.sectionLayout,
        menuLayout: action.menuLayout
      }
    case actionTypes.SECTION_CHANGED:
      return {
        ...state,
        activeSection: action.selectedSection
      }
    case actionTypes.MENU_ITEM_CHANGED:
      return {
        ...state,
        activeMenuItem: action.activeMenuItem
      }
    default:
      return initialState
  }
}
