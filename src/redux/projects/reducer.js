import { actionTypes } from './constants'

const initialState = {
  items: [],
  pagination: {
    page: 1,
    totalPages: 1,
    totalRecords: 0,
    recordsOnPage: 20
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
      const totalRecords = payload.total
      const totalPages = payload.totalPages
      return {
        ...state,
        items: payload.items,
        pagination: {
          page: state.pagination.page,
          totalPages: totalPages,
          totalRecords: totalRecords,
          recordsOnPage: state.pagination.recordsOnPage
        }
      }
    case actionTypes.projectsNextPage:
      if (state.pagination.page === state.pagination.totalPages)
        return state

      let incState = Object.assign({}, state)
      incState.pagination.page += 1
      return incState
    case actionTypes.projectsPrevPage:
      if (state.pagination.page === 1)
        return state

      let decState = Object.assign({}, state)
      decState.pagination.page -= 1
      return decState
    default:
      return state
  }
}
