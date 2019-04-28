import { takeEvery, takeLatest, all } from 'redux-saga/effects'
import { sagaActions as navbarActions } from '../redux/navbar/constants'
import { sagaActions as leadsActions } from '../redux/leads/constants'
import {
  menuItemChanged,
  sectionChanged,
  navbarStructureReceived
} from '../redux/navbar/actions'

import {
  getLeads,
  nextPage,
  prevPage,
} from '../redux/leads/actions'

// Navbar
function *watchMenuItemChange() {
  yield takeEvery(navbarActions.SAGA_MENU_ITEM_CHANGED, menuItemChanged)
}

function *watchSectionChange() {
  yield takeLatest(navbarActions.SAGA_SECTION_CHANGED, sectionChanged)
}

function *watchNavbarStructure() {
  yield takeLatest(navbarActions.SAGA_GET_NAVBAR_STRUCTURE, navbarStructureReceived)
}

// Leads
function *watchLeadsRequested() {
  yield takeLatest(leadsActions.SAGA_LEADS_REQUESTED, getLeads)
}

function *watchLeadsNextPage() {
  yield takeLatest(leadsActions.SAGA_NEXT_PAGE, nextPage)
}

function *watchLeadsPrevPage() {
  yield takeLatest(leadsActions.SAGA_PREV_PAGE, prevPage)
}

export default function *rootSaga() {
  yield all([
    watchMenuItemChange(),
    watchSectionChange(),
    watchNavbarStructure(),
    watchLeadsRequested(),
    watchLeadsNextPage(),
    watchLeadsPrevPage(),
  ])
}


