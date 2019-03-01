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
    case actionTypes.received:
      return {
        ...state,
        items: payload.items,
        pagination: {
          ...state.pagination,
          totalPages: payload.pagination.totalPages,
          totalRecords: payload.pagination.totalRecords,
        }
      }
    case actionTypes.nextPage:
      return state.pagination.page === state.pagination.totalPages
        ? state
        : {
          ...state,
          pagination: {
            ...state.pagination,
            page: state.pagination.page + 1
          }
        }
    case actionTypes.prevPage:
      return state.pagination.page === 1
        ? state
        : {
          ...state,
          pagination: {
            ...state.pagination,
            page: state.pagination.page - 1
          }
        }
    default:
      return state
  }
}
