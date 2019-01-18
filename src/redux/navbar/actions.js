import { actionTypes } from './constants'
import { getNavigationStructure } from '../../utils/api'

export function selectSection(section) {
  return {
    type: undefined,
    selectedSection: section
  }
}

export function navbarStructureRequested() {
  return {
    type: actionTypes.GET_NAVBAR_STRUCTURE_REQUESTED
  }
}

export function navbarStructureReceived(structure) {
  return {
    type: actionTypes.GET_NAVBAR_STRUCTURE_COMPLETED,
    structure: structure
  }
}

function sectionChanged(section) {
  return {
    type: actionTypes.SECTION_CHANGED,
    selectedSection: section
  }
}

export function getNavbarStructure() {
  return function(dispatch) {
    dispatch(navbarStructureRequested())
    // return fetch(``)
    let answer = new Promise((resolve, reject) => {
      resolve()
    })

    answer
      .then(
        _ => getNavigationStructure(),
        error => console.log('An error occured', error)
      )
      .then(structure => dispatch(navbarStructureReceived(structure)))

      return answer
  }
}

export function sectionSelected(section) {
  return function (dispatch) {
    dispatch(sectionChanged(section))
  }
}
