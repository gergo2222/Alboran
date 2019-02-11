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
const nextPage = () => {
  return {
    type: actionTypes.projectsNextPage
  }
}
const prevPage = () => {
  return {
    type: actionTypes.projectsPrevPage
  }
}

export function getProjects(pagination) {
  return function (dispatch) {
    dispatch(projectsRequested())

    console.log('trying to get data from api, pagination:', pagination)
    let projectList = []
    for (let index = 1; index < 100; index++) {
      projectList.push({
        project: `Project ${index}`,
        client: 'Alpha',
        office: 'Numero Uno',
        projectId: index,
        startOn: '2019-01-01',
        endOn: '2019-01-01',
        serviceType: 'Mystery shopping',
        manager: 'Wesley Springfield'
      })
    }

    const {
      page,
      recordsOnPage
    } = pagination

    const response = {
      items: projectList.slice((page - 1) * recordsOnPage, page * recordsOnPage),
      total: projectList.length,
      totalPages: projectList.length % recordsOnPage === 0 ? projectList.length / recordsOnPage : Math.floor(projectList.length / recordsOnPage + 1)
    }

    console.log('api return', response, page, recordsOnPage)

    dispatch(projectsReceived(response))
  }
}

export function onNextPage() {
  return function(dispatch) {
    dispatch(nextPage())
  }
}

export function onPrevPage() {
  return function(dispatch) {
    dispatch(prevPage())
  }
}
