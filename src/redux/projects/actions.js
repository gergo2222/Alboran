import { select, call, put } from 'redux-saga/effects'
import { actionTypes } from './constants'
import { projects } from '../../utils/api'

export function *getProjects() {
  const { pagination } = yield select(state => state.projects)
  const data = yield call(projects, pagination)

  yield put({
    type: actionTypes.PROJECTS_RECEIVED,
    payload: data
  })
}

export function *nextProjectsPage() {
  yield put({ type: actionTypes.PROJECTS_NEXT_PAGE })
  yield call(getProjects)
}

export function *prevProjectsPage() {
  yield put({ type: actionTypes.PROJECTS_PREV_PAGE })
  yield call(getProjects)
}

export function *searchProjects({ filter }) {
  yield put({
    type: actionTypes.FILTER_PROJECTS,
    payload: filter
  })
  yield call(getProjects)
}
