const companies = [
  "Acura",
  "Telecor",
  "KMGU"
]

export const leads = (pagination) => {
  let leads = []
  for (let i = 0; i < 24; i++) {
    leads.push({ type: `Industry ${i}`, id: i, status: i % 4 === 0 ? `Engaged` : `Inactive`, state: i % 7 === 0 ? `Open` : `Closed`, companyName: companies[i%3], office: `Belgium`, callback: `2019-01-01`, assignedTo: `John Wick` })
  }

  const {
    page,
    recordsOnPage,
    filter
  } = pagination

  leads = filter === undefined ? leads : leads.filter((lead) => lead.companyName.includes(filter))

  return {
    items: leads.slice((page - 1) * recordsOnPage, page * recordsOnPage),
    pagination: {
      totalRecords: leads.length,
      totalPages: leads.length % recordsOnPage === 0 ? leads.length / recordsOnPage : Math.floor(leads.length / recordsOnPage + 1),
    }
  }
}

export const projects = (pagination) => {
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

  projectList = pagination.filter ? projectList.filter(x => x.project.includes(pagination.filter)) : projectList

  const {
    page,
    recordsOnPage
  } = pagination

  const response = {
    items: projectList.slice((page - 1) * recordsOnPage, page * recordsOnPage),
    total: projectList.length,
    totalPages: projectList.length % recordsOnPage === 0 ? projectList.length / recordsOnPage : Math.floor(projectList.length / recordsOnPage + 1)
  }

  return response
}
