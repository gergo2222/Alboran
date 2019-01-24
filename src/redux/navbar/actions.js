import { actionTypes, sectionLayout, menuLayout } from './constants'

export function selectSection(section) {
  return {
    type: undefined,
    selectedSection: section
  }
}

export function navbarStructureRequested() {
  return {
    type: actionTypes.GET_NAVBAR_STRUCTURE_REQUESTED
  }
}

export function navbarStructureReceived() {
  return {
    type: actionTypes.GET_NAVBAR_STRUCTURE_COMPLETED,
    sectionLayout,
    menuLayout
  }
}

function sectionChanged(section) {
  return {
    type: actionTypes.SECTION_CHANGED,
    selectedSection: section
  }
}

const menuItemChanged = (item) => {
  return {
    type: actionTypes.MENU_ITEM_CHANGED,
    activeMenuItem: item
  }
}

export function sectionSelected(section) {
  return function (dispatch) {
    dispatch(sectionChanged(section.id))
    dispatch(menuItemChanged(section.defaultMenuItem))
  }
}

export function onMenuItemChange(menuItem) {
  return function (dispatch) {
    dispatch(menuItemChanged(menuItem))
  }
}
