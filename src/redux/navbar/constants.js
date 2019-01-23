export const actionTypes = {
  GET_NAVBAR_STRUCTURE_REQUESTED: 'GET_NAVBAR_STRUCTURE_REQUESTED',
  GET_NAVBAR_STRUCTURE_COMPLETED: 'GET_NAVBAR_STRUCTURE_COMPLETED',
  SECTION_CHANGED: 'SECTION_CHANGED'
}

export const sectionLayout = {
  home: {
    label: "Home",
    menu: [
      "Home",
      "Help Desk",
      "Offices",
      "Countries",
      "Currencies",
      "User Directory",
      "Release Notes",
    ]
  },
  sales: {
    label: "Sales",
    menu: [
      "Leads",
      "Opportunities",
      "Clients",
    ]
  },
  operations: {
    label: "Operations",
    menu: [
      "Clients",
      "Projects",
      "Assignments",
    ]
  }
}
