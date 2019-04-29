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
    case actionTypes.PROJECTS_RECEIVED:
      return {
        ...state,
        items: payload.items,
        pagination: {
          ...state.pagination,
          totalPages: payload.totalPages,
          totalRecords: payload.total,
        }
      }
    case actionTypes.PROJECTS_NEXT_PAGE:
      if (state.pagination.page === state.pagination.totalPages)
        return state

      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: state.pagination.page + 1
        }
      }
    case actionTypes.PROJECTS_PREV_PAGE:
      if (state.pagination.page === 1)
        return state

      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: state.pagination.page - 1
        }
      }
    case actionTypes.FILTER_PROJECTS:
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
