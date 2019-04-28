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
