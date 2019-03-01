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

export const projectsReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case actionTypes.projectsRequested:
      return {
        ...state
      }
    case actionTypes.projectsReceived:
      return {
        ...state,
        items: payload.items,
        pagination: {
          ...state.pagination,
          totalPages: payload.totalPages,
          totalRecords: payload.total,
        }
      }
    case actionTypes.projectsNextPage:
      if (state.pagination.page === state.pagination.totalPages)
        return state

      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: state.pagination.page + 1
        }
      }
    case actionTypes.projectsPrevPage:
      if (state.pagination.page === 1)
        return state

      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: state.pagination.page - 1
        }
      }
    case actionTypes.projectsFilter:
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
