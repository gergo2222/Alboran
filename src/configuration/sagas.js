import { takeEvery, takeLatest, all } from 'redux-saga/effects'
import { sagaActions as navbarActions } from '../redux/navbar/constants'
import { sagaActions as leadActions } from '../redux/leads/constants'
import { sagaActions as projectActions } from '../redux/projects/constants'
import {
  menuItemChanged,
  sectionChanged,
  navbarStructureReceived
} from '../redux/navbar/actions'

import {
  getLeads,
  nextLeadsPage,
  prevLeadsPage,
  searchLeads,
} from '../redux/leads/actions'

import {
  getProjects,
  searchProjects,
  nextProjectsPage,
  prevProjectsPage,
} from '../redux/projects/actions'

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
  yield takeLatest(leadActions.LEADS_REQUESTED, getLeads)
}

function *watchLeadsNextPage() {
  yield takeLatest(leadActions.LEADS_NEXT_PAGE, nextLeadsPage)
}

function *watchLeadsPrevPage() {
  yield takeLatest(leadActions.LEADS_PREV_PAGE, prevLeadsPage)
}

function *watchLeadsSearch() {
  yield takeLatest(leadActions.LEADS_SEARCH, searchLeads)
}

// Projects
function *watchProjectsRequest() {
  yield takeLatest(projectActions.PROJECTS_REQUESTED, getProjects)
}

function *watchProjectsSearch() {
  yield takeLatest(projectActions.SEARCH_PROJECTS, searchProjects)
}

function *watchProjectsNextPage() {
  yield takeLatest(projectActions.SAGA_PROJECTS_NEXT_PAGE, nextProjectsPage)
}

function *watchProjectsPrevPage() {
  yield takeLatest(projectActions.SAGA_PROJECTS_PREV_PAGE, prevProjectsPage)
}

export default function *rootSaga() {
  yield all([
    watchMenuItemChange(),
    watchSectionChange(),
    watchNavbarStructure(),

    watchLeadsRequested(),
    watchLeadsNextPage(),
    watchLeadsPrevPage(),
    watchLeadsSearch(),

    watchProjectsRequest(),
    watchProjectsSearch(),
    watchProjectsNextPage(),
    watchProjectsPrevPage(),
  ])
}


