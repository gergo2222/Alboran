import { takeEvery, all } from 'redux-saga/effects'
import { sagaActions } from '../redux/navbar/constants'
import {
  menuItemChanged,
  sectionChanged,
  navbarStructureReceived
} from '../redux/navbar/actions'

function *watchMenuItemChange() {
  yield takeEvery(sagaActions.SAGA_MENU_ITEM_CHANGED, menuItemChanged)
}

function *watchSectionChange() {
  yield takeEvery(sagaActions.SAGA_SECTION_CHANGED, sectionChanged)
}

function *watchNavbarStructure() {
  yield takeEvery(sagaActions.SAGA_GET_NAVBAR_STRUCTURE, navbarStructureReceived)
}

export default function *rootSaga() {
  yield all([
    watchMenuItemChange(),
    watchSectionChange(),
    watchNavbarStructure(),
  ])
}


