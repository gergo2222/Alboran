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

export function getNavbarStructure() {
  return function(dispatch) {
    dispatch(navbarStructureRequested())
    // return fetch(``)
    let answer = new Promise((resolve, reject) => {
      resolve()
    })

    answer
      .then(
        _ => [
          {
            label: "Home",
            menu: [
              "Home",
              "Help Desk",
              "Offices",
            ]
          },
          {
            label: "Sales",
            menu: [
              "Leads",
              "Opportunities",
              "Clients",
            ]
          },
          {
            label: "Operations",
            menu: [
              "Clients",
              "Projects",
              "Assignments",
            ]
          }
        ],
        error => console.log('An error occured', error)
      )
      .then(structure => dispatch(navbarStructureReceived(structure)))

      return answer
  }
}
