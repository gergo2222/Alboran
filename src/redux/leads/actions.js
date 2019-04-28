import { call, select, put } from 'redux-saga/effects'
import { actionTypes } from './constants'
import { leads } from '../../utils/api'

export function *getLeads() {
  const { pagination } = yield select((x) => x.leads)
  const data = yield call(leads, pagination)
  yield put(leadsReceived(data))
}

export const onNextPage = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.nextPage
  })

  // todo actual call to API
  // avoid unnecessary api calls when it's first or last page
  const { pagination } = getState().leads
  dispatch(leadsReceived(leads(pagination)))
}

export const onPrevPage = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.prevPage
  })

  // todo actual call to API
  // avoid unnecessary api calls when it's first or last page
  const { pagination } = getState().leads
  dispatch(leadsReceived(leads(pagination)))
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
