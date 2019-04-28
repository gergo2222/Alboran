import { call, select, put } from 'redux-saga/effects'
import { actionTypes } from './constants'
import { leads } from '../../utils/api'

export function *getLeads() {
  const { pagination } = yield select((x) => x.leads)
  const data = yield call(leads, pagination)
  yield put(leadsReceived(data))
}

export function *nextPage() {
  yield put({ type: actionTypes.LEADS_NEXT_PAGE })
  yield call(getLeads)
}

export function *prevPage() {
  yield put({ type: actionTypes.LEADS_PREV_PAGE })
  yield call(getLeads)
}

export const onSearch = ({ target: { value: filter } }) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.filter,
    payload: filter
  })

  const { pagination } = getState().leads
  dispatch(leadsReceived(leads(pagination)))
}

const leadsReceived = (data) => {
  return {
    type: actionTypes.LEADS_RECEIVED,
    payload: data
  }
}
