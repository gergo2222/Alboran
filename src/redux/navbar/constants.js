export const actionTypes = {
  GET_NAVBAR_STRUCTURE_REQUESTED: 'GET_NAVBAR_STRUCTURE_REQUESTED',
  GET_NAVBAR_STRUCTURE_COMPLETED: 'GET_NAVBAR_STRUCTURE_COMPLETED',
  SECTION_CHANGED: 'SECTION_CHANGED'
}

export const sectionLayout = {
  Home: {
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
  Sales: {
    label: "Sales",
    menu: [
      "Leads",
      "Opportunities",
      "Clients",
    ]
  },
  Operations: {
    label: "Operations",
    menu: [
      "Clients",
      "Projects",
      "Assignments",
    ]
  }
}
