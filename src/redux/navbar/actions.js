import { actionTypes, sectionLayout, menuLayout } from './constants'
import { put, call } from 'redux-saga/effects'

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

export function *sectionChanged({section}) {
  yield put({
    type: actionTypes.SECTION_CHANGED,
    selectedSection: section.id
  })

  yield call(menuItemChanged, {item: section.defaultMenuItem})
}

export function *menuItemChanged({item}) {
  yield put({
    type: actionTypes.MENU_ITEM_CHANGED,
    activeMenuItem: item
  })
}

// export function sectionSelected(section) {
//   return function (dispatch) {
//     dispatch(sectionChanged(section.id))
//     dispatch(menuItemChanged(section.defaultMenuItem))
//   }
// }
