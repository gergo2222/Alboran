import { actionTypes } from './constants'

const projectsRequested = () => {
  console.log('requesting projects')
  return {
    type: actionTypes.projectsRequested
  }
}
const projectsReceived = (projects) => {
  console.log('received projects', projects)
  return {
    type: actionTypes.projectsReceived,
    payload: projects
  }
}

export function getProjects() {
  return function (dispatch) {
    dispatch(projectsRequested())
    // call to API
    dispatch(projectsReceived([1,2]))
  }
}
