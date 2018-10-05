import { createActions } from 'redux-actions'

const actions = createActions({
  home: {
    open: x=>x,
  }
})

export default actions

export const openHome = (dispatch) => {
  dispatch(actions.home.open())
}
