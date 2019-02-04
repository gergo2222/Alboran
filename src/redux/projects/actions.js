import { actionTypes } from './constants'

const projectsRequested = () => {
  return {
    type: actionTypes.projectsRequested
  }
}
const projectsReceived = (projects) => {
  return {
    type: actionTypes.projectsReceived,
    payload: projects
  }
}

export function getProjects() {
  return function (dispatch) {
    dispatch(projectsRequested())
    let projectList = []
    for (let index = 1; index < 100; index++) {
      projectList.push({project: `Project ${index}`, client: 'Alpha', office: 'Numero Uno', projectId: index})
    }
    dispatch(projectsReceived(projectList))
  }
}
