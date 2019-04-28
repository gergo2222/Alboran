import { takeEvery, all } from 'redux-saga/effects'
import { sagaActions } from '../redux/navbar/constants'
import {
  menuItemChanged,
  sectionChanged,
} from '../redux/navbar/actions'

function hello() {
  console.log('hello there')
}

function *helloAsync() {
  yield takeEvery('SAGA', hello)
}



function *watchMenuItemChange() {
  yield takeEvery(sagaActions.SAGA_MENU_ITEM_CHANGED, menuItemChanged)
}

function *watchSectionChange() {
  yield takeEvery(sagaActions.SAGA_SECTION_CHANGED, sectionChanged)
}

export default function *rootSaga() {
  yield all([
    helloAsync(),
    watchMenuItemChange(),
    watchSectionChange()
  ])
}


