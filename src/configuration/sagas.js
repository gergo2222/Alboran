import { takeEvery, takeLatest, all } from 'redux-saga/effects'
import { sagaActions as navbarActions } from '../redux/navbar/constants'
import { sagaActions as leadsActions } from '../redux/leads/constants'
import {
  menuItemChanged,
  sectionChanged,
  navbarStructureReceived
} from '../redux/navbar/actions'

import {
  getLeads
} from '../redux/leads/actions'

function *watchMenuItemChange() {
  yield takeEvery(navbarActions.SAGA_MENU_ITEM_CHANGED, menuItemChanged)
}

function *watchSectionChange() {
  yield takeLatest(navbarActions.SAGA_SECTION_CHANGED, sectionChanged)
}

function *watchNavbarStructure() {
  yield takeLatest(navbarActions.SAGA_GET_NAVBAR_STRUCTURE, navbarStructureReceived)
}

function *watchLeadsRequested() {
  yield takeLatest(leadsActions.SAGA_LEADS_REQUESTED, getLeads)
}

export default function *rootSaga() {
  yield all([
    watchMenuItemChange(),
    watchSectionChange(),
    watchNavbarStructure(),
    watchLeadsRequested(),
  ])
}


