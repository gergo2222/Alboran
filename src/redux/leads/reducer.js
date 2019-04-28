import { actionTypes } from './constants'

const initialState = {
  items: [],
  pagination: {
    page: 1,
    totalPages: 1,
    totalRecords: 0,
    recordsOnPage: 20,
    filter: undefined
  }
}

export const leadsReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case actionTypes.request:
      return {
        ...state
      }
    case actionTypes.LEADS_RECEIVED:
      return {
        ...state,
        items: payload.items,
        pagination: {
          ...state.pagination,
          totalPages: payload.pagination.totalPages,
          totalRecords: payload.pagination.totalRecords,
        }
      }
    case actionTypes.LEADS_NEXT_PAGE:
      return state.pagination.page === state.pagination.totalPages
        ? state
        : {
          ...state,
          pagination: {
            ...state.pagination,
            page: state.pagination.page + 1
          }
        }
    case actionTypes.LEADS_PREV_PAGE:
      return state.pagination.page === 1
        ? state
        : {
          ...state,
          pagination: {
            ...state.pagination,
            page: state.pagination.page - 1
          }
        }
    case actionTypes.filter:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          filter: payload
        }
      }
    default:
      return state
  }
}
